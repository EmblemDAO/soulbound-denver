import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { About } from "./About";
import { BadgeDefinitions } from "./BadgeDefinitions";
import { ConnectWallet } from "./ConnectWallet";
import { Header } from "./Header";
import "./index.css";
import { client } from "./lib/apollo-client";
import { SoulboundDenver } from "./SoulboundDenver";
import { Steps } from "./Steps";
import { UserAvatars } from "./UserAvatars";

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="bg-slate-900 min-h-screen py-12 dark">
        {/* <Navbar /> */}
        <div className="container mx-auto">
          <div className="flex items-center gap-12">
            <div className="shrink-0">
              <SoulboundDenver />
            </div>
            <About />
          </div>

          <hr className="my-16" />

          <Steps />

          <BadgeDefinitions />

          <ConnectWallet />

          <hr className="my-16" />

          <div className="mt-16">
            <Header title="Leaderboard" />
            <UserAvatars />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};
// Assuming there is a HTML element with id "root".
ReactDOM.render(<App />, document.querySelector("#root"));
