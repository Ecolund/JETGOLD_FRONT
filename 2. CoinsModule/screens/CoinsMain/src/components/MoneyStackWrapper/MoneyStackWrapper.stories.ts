import type { Meta, StoryObj } from "@storybook/react";
import { MoneyStackWrapper } from ".";

const meta: Meta<typeof MoneyStackWrapper> = {
  title: "Components/MoneyStackWrapper",
  component: MoneyStackWrapper,
};

export default meta;

type Story = StoryObj<typeof MoneyStackWrapper>;

export const Default: Story = {
  args: {},
};
