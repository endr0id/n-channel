import { Form } from "radix-ui";
import type { ComponentProps, JSX } from "react";

interface SubmitButtonProps extends ComponentProps<"button"> {
  label: string;
}

const SubmitButton = ({ label }: SubmitButtonProps): JSX.Element => {
  return <Form.Submit>{label}</Form.Submit>;
};

export default SubmitButton;
