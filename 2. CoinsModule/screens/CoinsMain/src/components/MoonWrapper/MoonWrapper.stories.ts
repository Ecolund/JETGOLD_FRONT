import type { Meta, StoryObj } from "@storybook/react";
import { MoonWrapper } from ".";

const meta: Meta<typeof MoonWrapper> = {
  title: "Components/MoonWrapper",
  component: MoonWrapper,
};

export default meta;

type Story = StoryObj<typeof MoonWrapper>;

export const Default: Story = {
  args: {},
};
