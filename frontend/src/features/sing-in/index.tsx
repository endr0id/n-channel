import * as z from "zod";
import { useAppForm } from "../../components/form/hooks/useAppForm";
import { HelperText } from "../../components/form/TextField";

interface SignInFormData {
	email: string;
	password: string;
}

const defaultValues: SignInFormData = { email: "", password: "" };
const signInScheme = z.object({
	email: z.email("正しいメールアドレス形式で入力してください"),
	password: z.string().min(12, "パスワードは12文字以上で入力してください"),
});

const SignIn = () => {
	const form = useAppForm({
		defaultValues: defaultValues,
		validators: {
			onSubmit: signInScheme,
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
						<div className="grid gap-1">
							<field.TextField
								error={field.state.meta.errors.length > 0}
								placeholder="example@example.com"
								onBlur={(e) => field.handleChange(e.target.value)}
							/>
							{field.state.meta.errors && (
								<HelperText message={field.state.meta.errors[0]?.message} />
							)}
						</div>
					)}
				/>
				<form.AppField
					name="password"
					children={(field) => (
						<div className="grid gap-1">
							<field.TextField
								error={field.state.meta.errors.length > 0}
								type="password"
								onBlur={(e) => field.handleChange(e.target.value)}
							/>
							{field.state.meta.errors && (
								<HelperText message={field.state.meta.errors[0]?.message} />
							)}
						</div>
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
