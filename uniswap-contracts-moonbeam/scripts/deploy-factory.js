const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // // Deploy WETH
   // const weth = await ethers.getContractFactory('WETH');
   // const wethInstance = await weth.deploy();
   // await wethInstance.deployed();

   // console.log(`Wrapped native token deployed to : ${wethInstance.address}`);

   const wethAddress = "0xE3C7487Eb01C74b73B7184D198c7fBF46b34E5AF";

   // // Deploy Factory
   // const factory = await ethers.getContractFactory('UniswapV2Factory');
   // const factoryInstance = await factory.deploy(deployerAddress);
   // await factoryInstance.deployed();

   // console.log(`Factory deployed to : ${factoryInstance.address}`);
   const factoryAddress = "0xD184B1317125b166f01e8a0d6088ce1de61D00BA";

   // Init code
   // const calHash = await ethers.getContractFactory('CalHash');
   // const calHashInstance = await calHash.deploy();
   // await calHashInstance.deployed();
   // const calHashAddress = "0x630AdcF7c112610ffE8Da63BE052644d2Cc39466";

   // console.log(`CalHash deployed to : ${calHashInstance.address}`);

   // let initCode = await calHashInstance.getInitHash();
   // console.log(`INIT_CODE_HASH: ${initCode}.\nUse this in periphery/libraries/UniswapV2Library.sol before migrating routers`);
   let initialCodeHash = "0x85ef54c7b11fa267122f455865e82ffddd40f6604eaabc1e0e8c3646b55f08cc";
   
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

   const routerAddress = "0x802B0B134B76765378e10F1Ef5175349751af90a";
   const multicall = "0xa9177F8d98DAaB74C24715Ba0A81b73654710523";
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
