import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { initNotify, initOnboard } from "./services";
import { Tag } from "./Tag";

let provider;

export const ConnectWallet = ({
  address,
  setAddress,
  setNetwork,
  setWallet,
}) => {
  const [onboard, setOnboard] = useState(null);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    const onboard = initOnboard({
      address: setAddress,
      network: setNetwork,
      wallet: (wallet) => {
        if (wallet.provider) {
          setWallet(wallet);

          provider = new ethers.providers.Web3Provider(wallet.provider, "any");

          window.localStorage.setItem("selectedWallet", wallet.name);
        } else {
          provider = null;
          setWallet({});
        }
      },
    });

    setOnboard(onboard);

    setNotify(initNotify());
  }, []);

  useEffect(() => {
    const previouslySelectedWallet =
      window.localStorage.getItem("selectedWallet");

    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet);
    }
  }, [onboard]);

  const readyToTransact = async () => {
    if (!provider) {
      const walletSelected = await onboard.walletSelect();
      if (!walletSelected) return false;
    }

    const ready = await onboard.walletCheck();
    return ready;
  };

  const walletReset = () => {
    onboard.walletReset();
    localStorage.clear();
  };

  if (!onboard || !notify) return <div>Loading...</div>;

  const connectWalletButton = (
    <button
      style={{ border: "1px solid" }}
      onClick={readyToTransact}
      className="inline-flex  items-center border-blue border text-left shadow-sm px-3 py-1 "
    >
      <span className="uppercase tracking-wide text-sm text-blue hover:text-blue font-bold">
        <span className="">Connect Wallet</span>
      </span>
    </button>
  );

  const isConnected = address && onboard;

  return (
    <main>
      {isConnected ? (
        <span className="text-white text-xl gap-2">
          <span>{address}</span>
          <Tag primary={false} onClick={walletReset}>
            Disconnect
          </Tag>
        </span>
      ) : (
        connectWalletButton
      )}
    </main>
  );
};
