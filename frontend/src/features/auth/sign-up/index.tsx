import { Form } from "radix-ui";
import type { JSX } from "react";
import * as z from "zod";
import { useAppForm } from "../../../components/form/hooks/useAppForm";
import { formRecipes, formWrapperRecipes } from "./sign-up.style";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const defaultValue: SignUpFormData = { name: "", email: "", password: "" };
const signUpSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(12),
});

const SignUp = (): JSX.Element => {
  const form = useAppForm({
    defaultValues: defaultValue,
    validators: {
      onSubmit: signUpSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className={formWrapperRecipes}>
      <Form.Root
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className={formRecipes}
      >
        <form.AppField name="name">
          {(field) => (
            <field.TextField
              name={field.name}
              type="text"
              placeholder="Name"
              autoComplete="full-name"
            />
          )}
        </form.AppField>
        <form.AppField name="email">
          {(field) => (
            <field.TextField
              name={field.name}
              type="email"
              placeholder="Email Address"
              autoComplete="off"
            />
          )}
        </form.AppField>
        <form.AppField name="password">
          {(field) => (
            <field.TextField
              name={field.name}
              type="password"
              autoComplete="off"
            />
          )}
        </form.AppField>
        <form.AppForm>
          <form.SubmitButton label="SignUp" />
        </form.AppForm>
      </Form.Root>
    </div>
  );
};

export default SignUp;
