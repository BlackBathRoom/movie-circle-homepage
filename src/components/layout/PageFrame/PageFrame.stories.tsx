import type { Meta, StoryObj } from '@storybook/react-vite';

import PageFrame from './index';

const meta: Meta<typeof PageFrame> = {
  title: 'Components/layout/PageFrame',
  component: PageFrame,
  parameters: {
    layout: 'center',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PageFrame>
      <div className="p-5">
        <h1 className="text-2xl font-bold">Page Title</h1>
        <p className="mt-2 text-gray-700">This is the content of the page.</p>
      </div>
    </PageFrame>
  ),
};
