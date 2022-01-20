const { ethers } = require('hardhat');

// Pool creator on Seadex
// const address = "0xc2DED3bCDB5Ee215Ae384903B99a34937DCBF47d";  // moonbase
// const address = "0xD184B1317125b166f01e8a0d6088ce1de61D00BA";  // moonriver
const address = "0x0D987781cc9D592e606a610130681D6Ecb816EC7";     // moonbeam

// Deploy function
async function supportToken() {
   let feeTo = "0x02eb080e2b59744DF2Cb654e1fe41c608250bEC9";

   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Interacting with contracts using ${deployerAddress}`);

   const Factory = await ethers.getContractFactory('UniswapV2Factory');
   const factory = await Factory.attach(address);

   let owner = await factory.owner();
   console.log(`Owner address: ${owner}`);

   await factory.setFeeTo(feeTo);
   console.log(`Fee collector is ${feeTo}`);
}

supportToken()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
