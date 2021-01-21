import { IconButton } from "@material-ui/core";
import { ArrowBack, CheckCircle, Delete, Email, Error, LabelImportant, MoreVert, WatchLater } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Mail.css";

function Mail() {
  const history = useHistory();

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail_toolsLeft">
          <IconButton>
            <ArrowBack onClick={() => history.push("/")} />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail_toolsRight"></div>
      </div>
      <h1>What up PAPAFAN</h1>
    </div>
  );
}

export default Mail;
