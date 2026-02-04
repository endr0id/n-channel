interface TextFieldProps {
	type?: "text" | "email" | "password";
	disabled?: boolean;
	placeholder?: string;
}

const TextField = ({
	type = "text",
	disabled = false,
	placeholder,
}: TextFieldProps) => {
	return (
		<input
			type={type}
			disabled={disabled}
			placeholder={placeholder}
			className="border border-white rounded-md px-2 py-1 w-full focus:border-sky-500"
		/>
	);
};

export default TextField;
