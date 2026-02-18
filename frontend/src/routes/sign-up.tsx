import { createFileRoute } from "@tanstack/react-router";
import { css } from "../../styled-system/css/";
import SignUp from "../features/auth/sign-up";

export const Route = createFileRoute("/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      })}
    >
      <SignUp />
    </div>
  );
}
