import type { Meta, StoryObj } from "@storybook/react";
import { CoinVerticalWrapper } from ".";

const meta: Meta<typeof CoinVerticalWrapper> = {
  title: "Components/CoinVerticalWrapper",
  component: CoinVerticalWrapper,
};

export default meta;

type Story = StoryObj<typeof CoinVerticalWrapper>;

export const Default: Story = {
  args: {},
};
