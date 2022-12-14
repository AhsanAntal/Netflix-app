import { ArrowBack } from "@mui/icons-material";
import React from "react";
import "./watch.scss";

import { useLocation } from "react-router-dom";

export default function Watch() {
  const activeMovie = location.movie;

  return (
    <div className="watch">
      <div className="back-arrow">
        <ArrowBack />
        <span>Home</span>
      </div>
      <video
        className="video"
        autoPlay={true}
        controls
        src={activeMovie.trailer}
      ></video>
    </div>
  );
}
