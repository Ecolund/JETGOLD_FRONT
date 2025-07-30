import type { Meta, StoryObj } from "@storybook/react";
import { ChartSimpleWrapper } from ".";

const meta: Meta<typeof ChartSimpleWrapper> = {
  title: "Components/ChartSimpleWrapper",
  component: ChartSimpleWrapper,
};

export default meta;

type Story = StoryObj<typeof ChartSimpleWrapper>;

export const Default: Story = {
  args: {},
};
