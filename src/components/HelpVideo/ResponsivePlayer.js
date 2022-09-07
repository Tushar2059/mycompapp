import React from "react";
import "../HelpVideo/ResponsivePlayer.css";
import ReactPlayer from "react-player";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper ">
      <ReactPlayer
        className="react-player  "
        url="https://youtu.be/ufyaEqayTmg"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;
