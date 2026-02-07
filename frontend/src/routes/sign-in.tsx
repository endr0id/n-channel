import { createFileRoute } from "@tanstack/react-router";
import SignInLayout from "../features/sing-in";

export const Route = createFileRoute("/sign-in")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<SignInLayout />
		</div>
	);
}
