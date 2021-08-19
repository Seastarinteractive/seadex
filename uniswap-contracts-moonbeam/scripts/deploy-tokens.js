const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy WETH
   const token = await ethers.getContractFactory('Token');
   const mdt = await token.deploy("MEDET", "MEDET");
   await mdt.deployed();

   console.log(`MEDET token deployed to : ${mdt.address}`);

   const bl = await token.deploy("BLOCKLORDS ERC20", "BLOCKLORD");
   await bl.deployed();

   console.log(`Blocklords ERC-20 token deployed to : ${bl.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
