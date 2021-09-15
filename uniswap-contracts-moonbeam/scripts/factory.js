const { ethers } = require('hardhat');

// Pool creator on Seadex: factory
const address = "0xD184B1317125b166f01e8a0d6088ce1de61D00BA";  // moonriver

// Deploy function
async function info() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   const Factory = await ethers.getContractFactory('UniswapV2Factory');
   const factory = await Factory.attach(address);

   /// Add supported tokens
   let feeTo = await factory.feeTo();
   console.log(`Fee To: ${feeTo}`);
}

info()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
