import type { ComponentProps, JSX } from "react";
import { textFieldCva } from "./text-field.style";

interface TextFieldProps extends ComponentProps<"input"> {
  isValid: boolean;
}

const TextField = ({
  name,
  isValid,
  ...props
}: TextFieldProps): JSX.Element => {
  return (
    <input
      className={textFieldCva({ outlineColor: isValid ? "default" : "error" })}
      {...props}
    />
  );
};

export default TextField;
