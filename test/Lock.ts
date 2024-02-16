import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const SaveERC20 = await ethers.getContractFactory("SaveERC20");
    const saveErc20 = await SaveERC20.deploy();

    return { saveErc20, owner, otherAccount };

    
  }

  describe("Check Balance", function () {
    it("should return contract balance", async function () {
      const contractBal = await saveErc20.checkContractBalance();
      expect(contractBal).to.not.be.undefined;
      console.log("Contract Balance:", contractBal.toString());
    });
  });


  describe("Deployment", function () {
    it.only("Should deposit properly", async function () {
      const depositAmount = await ethers.parseEther("3");
      const { saveErc20, owner } = await loadFixture(deployOneYearLockFixture);

      await saveErc20.deposit(200);
      
      // await saveErc20.connect(owner).deposit({ value: depositAmount });
      // const balance = await saveErc20
      //   .connect(owner)
      //   .checkSavings(owner.address);
      // const checkWithdraw = await saveErc20.connect(owner).withdraw();
      // console.log(checkWithdraw);
      // console.log(balance);
    });
  });
});
