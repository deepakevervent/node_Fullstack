import { Button } from "@material-ui/core";
import React, { Component } from "react";
import "./Main_button.scss";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase } from "@mui/material";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#00bcd4",
    borderRadius: "10px",
  },
});

interface Props {
  icons: string;
}

const Main_button: React.FC<Props> = ({ icons }) => {
  return (
    <Button variant="contained" color="primary">
      Sign In
    </Button>
  );
};

export default Main_button;
