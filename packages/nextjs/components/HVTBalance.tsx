import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const HVTBalance = () => {
  const { address } = useAccount();
  const { data: tokenBalance, isLoading: isTokenBalanceLoading } = useScaffoldReadContract({
    contractName: "HoangVuToken",
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <div className="container mx-auto">
      {isTokenBalanceLoading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <h2 className="text-xl font-bold text-center mb-4 mt-3">
          Your Balance: {formatEther(tokenBalance || BigInt(0))} HVT
        </h2>
      )}
    </div>
  );
};
