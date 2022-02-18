import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BadgeDefinitions } from "./BadgeDefinitions";
import { Header } from "./Header";
import "./index.css";
import { SoulboundDenver } from "./SoulboundDenver";
import { UserAvatars } from "./UserAvatars";

const App: FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen py-12 dark">
      {/* <Navbar /> */}
      <div className="container mx-auto">
        <div className="flex items-center gap-12">
          <div className="shrink-0">
            <SoulboundDenver />
          </div>
          <BadgeDefinitions />
        </div>

        <hr className="my-16" />

        <div className="mt-16">
          <Header title="Leaderboard" />
          <UserAvatars />
        </div>
      </div>
    </div>
  );
};
// Assuming there is a HTML element with id "root".
ReactDOM.render(<App />, document.querySelector("#root"));
