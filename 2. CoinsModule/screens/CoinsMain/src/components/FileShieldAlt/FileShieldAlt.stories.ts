import type { Meta, StoryObj } from "@storybook/react";
import { FileShieldAlt } from ".";

const meta: Meta<typeof FileShieldAlt> = {
  title: "Components/FileShieldAlt",
  component: FileShieldAlt,
};

export default meta;

type Story = StoryObj<typeof FileShieldAlt>;

export const Default: Story = {
  args: {
    className: {},
    fileShieldAlt: "/img/file-shield-alt.png",
  },
};
