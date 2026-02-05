import * as z from "zod";
import { useAppForm } from "../../form/hooks/useAppForm";

interface SignInFormData {
	email: string;
	password: string;
}

const defaultValues: SignInFormData = { email: "", password: "" };
const signInScheme = z.object({
	email: z.email(),
	password: z.string(),
});

const SignIn = () => {
	const form = useAppForm({
		defaultValues: defaultValues,
		validators: {
			onBlur: signInScheme,
		},
		onSubmit: ({ value }) => {
			console.log("value: ", value);
		},
	});
	return (
		<div className="w-full max-w-md px-8 py-8 border border-mocha-text rounded-2xl">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit();
				}}
				className="grid gap-4"
			>
				<form.AppField
					name="email"
					children={(field) => (
						<field.TextField
							placeholder="example@example.com"
							onBlur={(e) => field.handleChange(e.target.value)}
						/>
					)}
				/>
				<form.AppField
					name="password"
					children={(field) => (
						<field.TextField
							type="password"
							onBlur={(e) => field.handleChange(e.target.value)}
						/>
					)}
				/>
				<form.AppForm>
					<form.SubmitButton label="Sign In" />
				</form.AppForm>
			</form>
		</div>
	);
};

export default SignIn;
