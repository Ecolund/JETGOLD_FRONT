import type { Meta, StoryObj } from "@storybook/react";
import { HomeIndicator } from ".";

const meta: Meta<typeof HomeIndicator> = {
  title: "Components/HomeIndicator",
  component: HomeIndicator,
};

export default meta;

type Story = StoryObj<typeof HomeIndicator>;

export const Default: Story = {
  args: {
    className: {},
    rectangleClassName: {},
  },
};
