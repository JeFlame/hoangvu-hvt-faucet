"use client";

import { useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const HVTFaucetButton = () => {
  const { writeContractAsync: writeTokenFaucet } = useScaffoldWriteContract("TokenFaucet");

  const [loading, setLoading] = useState(false);

  return (
    <button
      className="btn btn-secondary btn-sm px-2 rounded-full"
      onClick={async () => {
        try {
          setLoading(true);
          await writeTokenFaucet({
            functionName: "requestTokens",
          });
          setLoading(false);
        } catch (error) {
          console.error("Error requesting HVT token", error);
          setLoading(false);
        }
      }}
      disabled={loading}
    >
      {!loading ? <div>Request HVT Tokens</div> : <span className="loading loading-spinner loading-xs"></span>}
    </button>
  );
};
