import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BadgeDefinitions } from "./BadgeDefinitions";
import "./index.css";
import { SoulboundDenver } from "./SoulboundDenver";
import { UserAvatars } from "./UserAvatars";

const App: FC = () => {
  return (
    <div className="bg-slate-900 h-screen py-12 dark">
      {/* <Navbar /> */}
      <div className="container mx-auto">
        <div className="flex items-center gap-12">
          <div className="shrink-0">
            <SoulboundDenver />
          </div>
          <BadgeDefinitions />
        </div>

        <UserAvatars />
      </div>
    </div>
  );
};
// Assuming there is a HTML element with id "root".
ReactDOM.render(<App />, document.querySelector("#root"));
