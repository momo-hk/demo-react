import React from "react";
import TextField from 'material-ui/TextField'

/**
 * Return input control to Student Search form
 * @constructor
 */
export const renderInput = props => {
  const { input, label, classes, meta: { touched, error } } = props;

  const withError = (touched && error)? true: false;

  return (
    <TextField
      {...input}
      error={withError}
      label={label} 
      className={classes} 
      margin="normal"
      helperText={withError && error}
    />
  );
};