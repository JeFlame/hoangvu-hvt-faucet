"use client";

import type { NextPage } from "next";
import { HVTBalance } from "~~/components/HVTBalance";
import { HVTFaucetButton } from "~~/components/HVTFaucetButton";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-5xl font-bold italic text-center mb-4 mt-3">HVT Token Faucet</h1>
        <HVTBalance />
        <HVTFaucetButton />
      </div>
    </>
  );
};

export default Home;
