import React from "react";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import "./Footer.css";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" spacing={3}>
      <div className="footer_left">
        <Typography className="footer_name">
          <FaReact />
        </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed © 2021 by Nebojsa Ilic
          <br />
          Idea from{" "}
          <a
            href="https://themeforest.net/?auto_signin=true"
            rel="noreferrer"
            target="_blank"
          >
            ThemeForest
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
