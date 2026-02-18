import { Form } from "radix-ui";
import type { ComponentProps, JSX } from "react";
import { textFieldRecipes } from "./text-field.style";

interface TextFieldProps extends ComponentProps<"input"> {
  name: string;
}

const TextField = ({ name, ...props }: TextFieldProps): JSX.Element => {
  return (
    <Form.Field name={name}>
      <Form.Control asChild>
        <input className={textFieldRecipes} {...props} />
      </Form.Control>
    </Form.Field>
  );
};

export default TextField;
