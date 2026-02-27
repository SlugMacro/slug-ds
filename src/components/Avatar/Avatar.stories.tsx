import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    fallback: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
    alt: "John Doe",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar
          key={size}
          size={size}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
          alt={`Size ${size}`}
        />
      ))}
    </div>
  ),
};

export const WithInitials: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar fallback="JD" alt="John Doe" />
      <Avatar fallback="AB" alt="Alice Brown" />
      <Avatar fallback="MK" alt="Mike Kim" />
    </div>
  ),
};

export const NoSource: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar key={size} size={size} alt="Default user" />
      ))}
    </div>
  ),
};

export const ImageError: Story = {
  args: {
    src: "https://broken-url.example.com/avatar.jpg",
    fallback: "JD",
    alt: "John Doe (broken image)",
  },
};
