import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
// import { SaveERC20 } from "../typechain-types";
// import { Jubril } from "../typechain-types";

describe("SaveERC20", function () {
  async function deployContract() {
    const [owner, owner2] = await ethers.getSigners();

    const nft = await ethers.getContractFactory("Jubril");

    const eventNft = await nft.deploy(owner);

    const saveErc20 = await ethers.getContractFactory("SaveERC20");
    const erc20save = await saveErc20.deploy(eventNft.target);

    return { owner, owner2, eventNft, erc20save };
  }

  describe("This function should", function () {
    it.only("Let's check how far", async function () {
      const { eventNft, erc20save , owner} = await loadFixture(deployContract);

      await eventNft.connect(owner).approve(erc20save.target, 2000)
      await erc20save.connect(owner).deposit(2000)
      expect(await erc20save.connect(owner).checkUserBalance(owner.address)).to.eq(2000)
      
    });
  });
});
