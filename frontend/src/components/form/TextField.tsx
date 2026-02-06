import type { ValidationError } from "@tanstack/react-form";
import clsx from "clsx";
import type React from "react";

interface HelperTextProps {
	message?: string;
}

interface TextFieldProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	type?: "text" | "password" | "email";
	error: boolean;
}

export const HelperText = ({ message }: HelperTextProps) => {
	if (!message) return null;
	return <span className="text-sm text-mocha-red">{message}</span>;
};

const TextField = ({
	type = "text",
	error = false,
	className,
	...props
}: TextFieldProps) => {
	return (
		<input
			type={type}
			className={clsx(
				`border ${error ? "border-mocha-red" : "border-mocha-overlay2"} rounded-md focus:border-mocha-text`,
				"px-2 py-1",
				"placeholder:text-mocha-overlay1",
				"outline-none",
				"[&:-webkit-autofill]:shadow-[0_0_0_1000px_#1e1e2e_inset]",
				"[&:-webkit-autofill]:[-webkit-text-fill-color:var(--color-mocha-text)]",
				{ className },
			)}
			{...props}
		/>
	);
};

export default TextField;
