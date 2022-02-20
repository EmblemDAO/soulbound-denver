import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BadgeDefinitions } from "./BadgeDefinitions";
import { ConnectWallet } from "./ConnectWallet";
import { Header } from "./Header";
import "./index.css";
import { client } from "./lib/apollo-client";
import { SoulboundDenver } from "./SoulboundDenver";
import { UserAvatars } from "./UserAvatars";

const App: FC = () => {
  const [wallet, setWallet] = React.useState<string | null>(null);
  const [network, setNetwork] = React.useState<string | null>(null);
  const [provider, setProvider] = React.useState<string | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);

  return (
    <ApolloProvider client={client}>
      <div className="bg-slate-900 min-h-screen py-12 dark">
        {/* <Navbar /> */}
        <div className="container mx-auto">
          <div className="flex items-center gap-12">
            <div className="shrink-0">
              <SoulboundDenver />
            </div>
            <ConnectWallet
              setWallet={setWallet}
              setNetwork={setNetwork}
              address={address}
              setAddress={setAddress}
            />
            {/* <About /> */}
          </div>

          <hr className="my-16" />

          {/* <Steps /> */}

          <Header
            title="Badges"
            description="Awarded for noteworthy on-chain behavior within the Balancer protocol"
          />
          <BadgeDefinitions />

          <hr className="my-16" />

          <div className="mt-16">
            <Header
              title="Avatar Sprites"
              description="Minted badges reflect the number of times a user has earned a badge within Balancer"
            />
            <UserAvatars />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};
// Assuming there is a HTML element with id "root".
ReactDOM.render(<App />, document.querySelector("#root"));
