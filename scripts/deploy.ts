import { ethers } from "hardhat";

async function main() {
  const jubril = await ethers.deployContract("Jubril");
  await jubril.waitForDeployment();

  const saveErc20 = await ethers.deployContract("SaveERC20");

  await saveErc20.waitForDeployment();

  console.log(`deployed to ${saveErc20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
