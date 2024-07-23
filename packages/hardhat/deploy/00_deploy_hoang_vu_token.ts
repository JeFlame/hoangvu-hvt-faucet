import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployHoangVuToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Sepolia
  await deploy("HoangVuToken", {
    from: deployer,
    args: ["0xe84680C37f320c56d9F26E549155D33Bd412e7E3"],
    log: true,
    autoMine: true,
  });

  // // Localhost
  // await deploy("HoangVuToken", {
  //   from: deployer,
  //   args: ["0x9455dea772f304f4e1117B9E472611Ec626ad2fD"],
  //   log: true,
  //   autoMine: true,
  // });
};

export default deployHoangVuToken;

deployHoangVuToken.tags = ["HoangVuToken"];
