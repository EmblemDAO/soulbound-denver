import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BadgeDefinitions } from "./BadgeDefinitions";
import "./index.css";
import { SoulboundDenver } from "./SoulboundDenver";
// For the font-family to work, you would have to setup the Google Fonts link:
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap" />
const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';
const IMAGE_URL = "https://playground.arwes.dev/assets/images/wallpaper.jpg";
const SOUND_OBJECT_URL =
  "https://playground.arwes.dev/assets/sounds/object.mp3";
const SOUND_TYPE_URL = "https://playground.arwes.dev/assets/sounds/type.mp3";
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  type: { src: [SOUND_TYPE_URL], loop: true },
};
const bleepsSettings = {
  object: { player: "object" },
  type: { player: "type" },
};

const generalAnimator = { duration: { enter: 200, exit: 200 } };
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
      </div>
    </div>
  );
};
// Assuming there is a HTML element with id "root".
ReactDOM.render(<App />, document.querySelector("#root"));
