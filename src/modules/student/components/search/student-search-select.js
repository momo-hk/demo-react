import React from "react";
import { TextField, MenuItem } from "material-ui";

/**
 * Return select control to Student Search form
 * @constructor
 */
export const renderSelect = props => {
  const { input, defaultValue, optionList, classes } = props;
  
  let options = [];
  options[0] = defaultValue;
  optionList.forEach((value, index) => {
    options[index] = value;
  });

  return (
    <TextField
      select
      {...input}
      label={defaultValue}
      className={classes}
      margin="normal"
    >
      {options.map((optionLabel, optionValue) => (
        <MenuItem key={optionValue} value={optionValue}>
          {optionLabel}
        </MenuItem>
      ))}
    </TextField>
  );
};
