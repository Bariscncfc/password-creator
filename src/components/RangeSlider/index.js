import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";

const RangeSlider = ({ passwordLength, setPasswordLength, handleChange }) => {
  return (
    <div>
      <Box width={300}>
        <Slider
          value={passwordLength}
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="on"
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </Box>
    </div>
  );
};

export default RangeSlider;
