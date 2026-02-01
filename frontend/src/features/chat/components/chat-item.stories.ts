import type { Meta, StoryObj } from "@storybook/react-vite";
import ChatItem from "./chat-item";

const meta = {
	title: "components/ChatItem",
	component: ChatItem,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		message: { control: "text" },
	},
} satisfies Meta<typeof ChatItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ASCII: Story = {
	args: {
		message: "Hello World. 12345 @#$%",
	},
};

export const BMP: Story = {
	args: {
		message: "こんにちは世界。日本語テキスト",
	},
};

export const Emoji_Supplementary: Story = {
	args: {
		message: "😀😃😄😁👨‍👩‍👧‍👦",
	},
};
