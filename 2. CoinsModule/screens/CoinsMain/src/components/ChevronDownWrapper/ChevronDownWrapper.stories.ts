import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDownWrapper } from ".";

const meta: Meta<typeof ChevronDownWrapper> = {
  title: "Components/ChevronDownWrapper",
  component: ChevronDownWrapper,
};

export default meta;

type Story = StoryObj<typeof ChevronDownWrapper>;

export const Default: Story = {
  args: {},
};
