import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import SubmitButton from "../submit-button";
import TextField from "../text-field";

export const { fieldContext, formContext } = createFormHookContexts();
export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
