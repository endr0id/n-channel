import type { JSX } from "react";
import * as z from "zod";
import { css } from "../../../../styled-system/css";
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

const helperTextRecies = css({
  display: "block",
  paddingTop: "4px",
  paddingX: "1rem",
  fontSize: "0.75rem",
  color: "mocha.red",
});

const SignUp = (): JSX.Element => {
  const form = useAppForm({
    defaultValues: defaultValue,
    validators: {
      onBlur: signUpSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className={formWrapperRecipes}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className={formRecipes}
      >
        <form.AppField name="name">
          {(field) => (
            <div>
              <field.TextField
                type="text"
                autoComplete="name"
                onBlur={(e) => field.handleChange(e.target.value)}
                isValid={field.state.meta.isValid}
                placeholder="Name"
              />
              {!field.state.meta.isValid && (
                <span className={helperTextRecies}>Name is required</span>
              )}
            </div>
          )}
        </form.AppField>
        <form.AppField name="email">
          {(field) => (
            <div>
              <field.TextField
                type="email"
                autoComplete="email"
                onBlur={(e) => field.handleChange(e.target.value)}
                isValid={field.state.meta.isValid}
                placeholder="Email Address"
              />
              {!field.state.meta.isValid && (
                <span className={helperTextRecies}>
                  Email Address is required
                </span>
              )}
            </div>
          )}
        </form.AppField>
        <form.AppField name="password">
          {(field) => (
            <div>
              <field.TextField
                type="password"
                autoComplete="new-password"
                onBlur={(e) => field.handleChange(e.target.value)}
                isValid={field.state.meta.isValid}
              />
              {!field.state.meta.isValid && (
                <span className={helperTextRecies}>Password is required</span>
              )}
            </div>
          )}
        </form.AppField>
        <form.AppForm>
          <form.SubmitButton label="Sign Up" />
        </form.AppForm>
      </form>
    </div>
  );
};

export default SignUp;
