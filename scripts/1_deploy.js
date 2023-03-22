//const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(0x5FbDB2315678afecb367f032d93F642f64180aa3
  //   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
  // fetch contract to deploy
  const Token=await ethers.getContractFactory("Token")
  // deploy
  const token = await Token.deploy()
  await token.deployed()
  console.log(`Token Deployed to:${token.address}`)
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
