import type { Meta, StoryObj } from '@storybook/react-vite';

import MoviePlayer from './index';

const meta: Meta<typeof MoviePlayer> = {
  title: 'Components/MoviePlayer',
  component: MoviePlayer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    href: {
      control: 'text',
      description:
        'YouTube embed URL, formatted as `https://www.youtube.com/embed/{videoId}?si={si}`.',
    },
    embedVideoTitle: {
      control: 'text',
      description: 'Title for the embedded video, used for accessibility.',
    },
    startAt: {
      control: 'number',
      description: 'Start time in seconds for the video playback.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling the iframe.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://www.youtube.com/embed/ZuRFp445jek?si=KA9yrA4nGe2-mDKN',
    embedVideoTitle: 'Example Video',
    startAt: 0,
    className: 'h-dvh',
  },
};
