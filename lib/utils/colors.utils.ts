interface ColorPalette {
  [key: string]: string;
}

function adjustColor(color: string, amount: number): string {
  const usePound = color.startsWith('#');
  const col = usePound ? color.slice(1) : color;

  const num = parseInt(col, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));

  return (
    (usePound ? '#' : '') +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
}

function generatePalette(baseColor: string): ColorPalette {
  return {
    50: adjustColor(baseColor, 80),
    100: adjustColor(baseColor, 60),
    200: adjustColor(baseColor, 40),
    300: adjustColor(baseColor, 20),
    400: adjustColor(baseColor, 10),
    500: baseColor,
    600: adjustColor(baseColor, -10),
    700: adjustColor(baseColor, -20),
    800: adjustColor(baseColor, -40),
  };
}

export function applyPalette(color: string): void {
  const palette = generatePalette(color);
  const root = document.documentElement;
  console.log(palette);
  root.style.setProperty('--color-primary', color);
  Object.entries(palette).forEach(([key, value]) => {
    root.style.setProperty(`--color-primary-${key}`, value);
  });
}
