import type { Meta, StoryObj } from "@storybook/react-vite";
import TextField from "./TextField";

const meta = {
  title: "components/form/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "placeholder",
    onBlur: () => {},
  },
  argTypes: {
    type: { control: false },
    onBlur: { control: false },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
  },
};

export const Email: Story = {
  args: {
    type: "email",
  },
};

export const Password: Story = {
  args: {
    type: "password",
  },
};
