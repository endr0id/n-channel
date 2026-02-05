import clsx from "clsx";

interface TextFieldProps {
	type?: "text" | "password" | "email";
	placeholder?: string;
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextField = ({ type = "text", placeholder, onBlur }: TextFieldProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			onBlur={onBlur}
			className={clsx(
				"border border-mocha-text rounded-md",
				"px-2 py-1",
				"placeholder:text-mocha-overlay1",
				"[&:-webkit-autofill]:shadow-[0_0_0_1000px_#1e1e2e_inset]",
				"[&:-webkit-autofill]:[-webkit-text-fill-color:var(--color-mocha-text)]",
			)}
		/>
	);
};

export default TextField;
