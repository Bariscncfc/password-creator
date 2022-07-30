import { FormControlLabel, Switch } from "@mui/material";
import React from "react";

const FormControl = ({
  setUppercase,
  setLowercase,
  uppercase,
  lowercase,
  setSymbols,
  symbols,
  setNumbers,
  numbers,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormControlLabel
        control={
          <Switch
            {...uppercase}
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        }
        label="Uppercase"
      />
      <FormControlLabel
        control={
          <Switch
            {...lowercase}
            color="secondary"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        }
        label="Lowercase"
      />
      <FormControlLabel
        control={
          <Switch
            {...numbers}
            color="warning"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        }
        label="Numbers"
      />
      <FormControlLabel
        control={
          <Switch
            {...symbols}
            color="success"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        }
        label="Symbols"
      />
    </div>
  );
};

export default FormControl;
