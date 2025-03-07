import React, { useEffect } from 'react';
import { Meta } from '@storybook/react';
import { applyPalette } from '../utils/colors.utils';

export default {
  title: 'Design System/Colors',
} as Meta;

const ColorPalette = () => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    applyPalette(event.target.value);
  };

  useEffect(() => {
    applyPalette('#1976d2');
  }, []);

  return (
    <div>
      <input
        defaultValue={'#2380DC'}
        type='color'
        onChange={handleColorChange}
        style={{ marginBottom: '20px' }}
      />
      <div
        style={{ display: 'flex', gap: 4, alignContent: 'center' }}
        className='color-palette'
      >
        {[50, 100, 200, 300, 400, 500, 600, 700, 800].reverse().map((shade) => (
          <div
            key={shade}
            className='color-box'
            style={{
              width: 100,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: `var(--color-primary-${shade})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export const Colors = ColorPalette.bind({});
