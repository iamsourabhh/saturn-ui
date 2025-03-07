import type { Preview } from '@storybook/react';
import '../lib/scss/main.scss';
import { applyPalette } from '../lib/utils/colors.utils';

applyPalette('#318CE7');

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
