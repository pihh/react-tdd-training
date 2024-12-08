import React, { FC } from "react";
import "./MuiMode.css";
import { Typography, useTheme } from "@mui/material";

interface MuiModeProps {}

const MuiMode: FC<MuiModeProps> = () => {
  const theme = useTheme();
  return (
    <>
      <div className="MuiMode" data-testid="MuiMode">
        <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
      </div>
    </>
  );
};

export default MuiMode;
