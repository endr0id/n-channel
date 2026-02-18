import { cva } from "../../../../styled-system/css";

export const textFieldCva = cva({
  base: {
    border: "1px solid",
    borderRadius: "4px",
    paddingX: "0.25rem",
    paddingY: "0.25rem",
    width: "100%",
    outline: "none",
    _focus: {
      borderColor: "mocha.text",
    },
    _autofill: {
      boxShadow: "0px 0px 0px 100px #1e1e2e inset",
      WebkitTextFillColor: "mocha.text",
    },
  },
  variants: {
    outlineColor: {
      default: {
        borderColor: "mocha.overlay0",
      },
      error: {
        borderColor: "mocha.red",
      },
    },
  },
  defaultVariants: {
    outlineColor: "default",
  },
});
