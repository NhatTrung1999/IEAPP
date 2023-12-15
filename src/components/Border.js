import { Box } from "@mui/material";
import React from "react";

const borderStyle = {
  padding: "15px",
  margin: "5px",
  borderRadius: "10px",
  border: "3px solid #4f6481",
};

export const Border = ({ children }) => {
  return (
    <Box component="div" sx={borderStyle}>
      {children}
    </Box>
  );
};
