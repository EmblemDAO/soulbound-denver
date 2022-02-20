import Notify from "bnc-notify";
import Onboard from "bnc-onboard";

const networkId = 4;

export function initOnboard(subscriptions) {
  return Onboard({
    hideBranding: false,
    networkId,
    // darkMode: true,
    subscriptions,
    walletSelect: {
      wallets: [{ walletName: "metamask" }],
    },
    walletCheck: [
      { checkName: "derivationPath" },
      { checkName: "connect" },
      { checkName: "accounts" },
      { checkName: "network" },
      { checkName: "balance", minimumBalance: "100000" },
    ],
  });
}

export function initNotify() {
  return Notify({
    networkId,
    onerror: (error) => console.log(`Notify error: ${error.message}`),
  });
}
