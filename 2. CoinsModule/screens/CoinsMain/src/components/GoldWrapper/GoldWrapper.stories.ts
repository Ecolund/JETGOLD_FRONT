import type { Meta, StoryObj } from "@storybook/react";
import { GoldWrapper } from ".";

const meta: Meta<typeof GoldWrapper> = {
  title: "Components/GoldWrapper",
  component: GoldWrapper,
};

export default meta;

type Story = StoryObj<typeof GoldWrapper>;

export const Default: Story = {
  args: {},
};
