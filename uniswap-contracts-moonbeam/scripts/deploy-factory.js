const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy WETH
   const weth = await ethers.getContractFactory('WETH');
   const wethInstance = await weth.deploy();
   await wethInstance.deployed();

   console.log(`Wrapped native token deployed to : ${wethInstance.address}`);

   // Deploy Factory
   const factory = await ethers.getContractFactory('UniswapV2Factory');
   const factoryInstance = await factory.deploy(deployerAddress);
   await factoryInstance.deployed();

   console.log(`Factory deployed to : ${factoryInstance.address}`);

   //Init code
   const calHash = await ethers.getContractFactory('CalHash');
   const calHashInstance = await calHash.deploy();
   await calHashInstance.deployed();

   console.log(`CalHash deployed to : ${calHashInstance.address}`);

   let initCode = await calHashInstance.getInitHash();
   console.log(`INIT_CODE_HASH: ${initCode}.\nUse this in periphery/libraries/UniswapV2Library.sol before migrating routers`);
   
   // //Deploy Router passing Factory Address and WETH Address
   // const router = await ethers.getContractFactory('UniswapV2Router02');
   // const routerInstance = await router.deploy(factoryAddress, wethAddress);
   // await routerInstance.deployed();

   // console.log(`Router V02 deployed to :  ${routerInstance.address}`);

   // //Deploy Multicall (needed for Interface)
   // const multicall = await ethers.getContractFactory('Multicall');
   // const multicallInstance = await multicall.deploy();
   // await multicallInstance.deployed();

   // console.log(`Multicall deployed to : ${multicallInstance.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
