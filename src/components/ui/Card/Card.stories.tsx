import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './index';

const meta: Meta<typeof Card> = {
  title: 'Components/ui/Card',
  component: Card,
  parameters: {
    layout: 'center',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="p-10">
      <Card {...args}>
        <div className="p-4">
          <h2 className="text-lg font-bold">Card Title</h2>
          <p className="text-gray-600">This is a simple card component.</p>
        </div>
      </Card>
    </div>
  ),
};
