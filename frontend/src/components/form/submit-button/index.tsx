import type { ComponentProps, JSX } from "react";
import { css } from "../../../../styled-system/css";

interface SubmitButtonProps extends ComponentProps<"button"> {
  label: string;
}

const SubmitButton = ({ label }: SubmitButtonProps): JSX.Element => {
  return (
    <button
      type="submit"
      className={css({
        border: "1px solid",
        borderRadius: "6px",
        borderColor: "mocha.text",
        cursor: "pointer",
      })}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
