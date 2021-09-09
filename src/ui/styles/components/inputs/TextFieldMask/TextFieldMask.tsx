import React from "react";
import InputMask from "react-input-mask";
import { TextField } from "@material-ui/core";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, ...props }) => {
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
