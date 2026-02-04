import type { Meta, StoryObj } from "@storybook/react-vite";
import TextField from "./text-field";

const meta = {
	title: "components/form/TextField",
	component: TextField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	argTypes: {
		type: { control: "select", options: ["text"] },
		disabled: { control: "boolean" },
		placeholder: { control: "text" },
	},
};
