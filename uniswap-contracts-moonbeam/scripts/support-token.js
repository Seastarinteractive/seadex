const { ethers } = require('hardhat');

// Pool creator on Seadex
// const address = "0xc2DED3bCDB5Ee215Ae384903B99a34937DCBF47d";  // moonbase
// const address = "0xD184B1317125b166f01e8a0d6088ce1de61D00BA";  // moonriver
const address = "0x0D987781cc9D592e606a610130681D6Ecb816EC7";  // moonbeam

// const WMOVR = "0xbd23fCD60bD2682dea6A3aad84b498c54d56c494";    // moonbase
// const WMOVR = "0xE3C7487Eb01C74b73B7184D198c7fBF46b34E5AF";    // moonriver
const WMOVR = "0xc5f6499612B049E40b05af7b7922a57954eE8c53";    // moonbeam
// const MEDET = "0x412898253E0dDc1af9D81740615BfefeF7b3BdAD";    // moonbase
// const BLOCKLORD = "0x7733B3F2cD9830C87f7Bab9c13DaA577d33f8e26";   // moonbase
// const CWS = "0xFde9cad69E98b3Cc8C998a8F2094293cb0bD6911";      // moonbase
// const CWS = "0x6fc9651f45B262AE6338a701D563Ab118B1eC0Ce";
// const RIB = "0xbD90A6125a84E5C512129D622a75CDDE176aDE5E";
// const USDC = "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d";        // moonriver
// const MSCP = "0x5c22ba65F65ADfFADFc0947382f2E7C286A0Fe45";        // moonriver

const CWS = "0x1aBB8FdE5e64be3419FceF80df335C68dD2956C7";         // moonbeam
const RIB = "0x4bDE98731149093a12579D71338fd3741fe6E5Ce";         // moonbeam
const MSCP = "0xB60590313975f0d98821B6Cab5Ea2a6d9641D7B6";        // moonbeam

// Deploy function
async function supportToken() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Interacting with contracts using ${deployerAddress}`);

   const Factory = await ethers.getContractFactory('UniswapV2Factory');
   const factory = await Factory.attach(address);


   let owner = await factory.owner();
   console.log(`Owner address: ${owner}`);

   /// Add supported tokens
   await factory.addSupportedToken(WMOVR);
   console.log(`WMOVR token supported`);

   await factory.addSupportedToken(CWS);
   console.log(`CWS token supported`);

   // let tx = await factory.addSupportedToken(USDC, {gasPrice: 50000000000});  // 100 GWEI
   // console.log(`USDC token supported`);
   // console.log(tx.hash);

   let tx = await factory.addSupportedToken(MSCP);  // 30 GWEI
   console.log(`MSCP token supported`);
   console.log(tx.hash);

   // Moonbase tokens
   // await factory.addSupportedToken(MEDET);
   // console.log(`MEDET token supported`);

   
   // await factory.addSupportedToken(BLOCKLORD);
   // console.log(`BLOCKLORD token supported`);


   // Moonriver tokens
   await factory.addSupportedToken(RIB);
   console.log(`RIB token supported`);
}

supportToken()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
