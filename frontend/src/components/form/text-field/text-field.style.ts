import { css } from "../../../../styled-system/css";

export const textFieldRecipes = css({
  border: "1px solid",
  borderRadius: "4px",
  borderColor: "mocha.overlay0",
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
});
