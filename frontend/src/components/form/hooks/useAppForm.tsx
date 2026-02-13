import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import TextField from "../TextField";
import SubmitButton from "../SubmitButton";

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
