const { ethers } = require('hardhat');

// Pool creator on Seadex
const address = "0xc2DED3bCDB5Ee215Ae384903B99a34937DCBF47d";

const WMOVR = "0xbd23fCD60bD2682dea6A3aad84b498c54d56c494";
const MEDET = "0x412898253E0dDc1af9D81740615BfefeF7b3BdAD";
const BLOCKLORD = "0x7733B3F2cD9830C87f7Bab9c13DaA577d33f8e26";
const CWS = "0x548b3589766AB56f2910A76bcFe1421Fe387F528";

// Deploy function
async function supportToken() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   const Factory = await ethers.getContractFactory('UniswapV2Factory');
   const factory = await Factory.attach(address);


   /// Add supported tokens
   await factory.addSupportedToken(WMOVR);
   console.log(`WMOVR token supported`);

   
   await factory.addSupportedToken(MEDET);
   console.log(`MEDET token supported`);

   
   await factory.addSupportedToken(BLOCKLORD);
   console.log(`BLOCKLORD token supported`);

   
   await factory.addSupportedToken(CWS);
   console.log(`CWS token supported`);
}

supportToken()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
