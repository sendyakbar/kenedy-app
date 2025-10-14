import { colors } from '../colors';

describe('colors', () => {
  it('defines PRIMARY color', () => {
    expect(colors.PRIMARY).toBe('#0a1542');
  });

  it('defines SECONDARY color', () => {
    expect(colors.SECONDARY).toBe('#277bf5');
  });

  it('defines BACKGROUND color', () => {
    expect(colors.BACKGROUND).toBe('#F7FAFC');
  });

  it('defines BORDER color', () => {
    expect(colors.BORDER).toBe('#E2E8F0');
  });

  it('defines WHITE color', () => {
    expect(colors.WHITE).toBe('#FFFFFF');
  });

  it('defines BLACK color', () => {
    expect(colors.BLACK).toBe('#000000');
  });

  it('defines TEXT_PRIMARY color', () => {
    expect(colors.TEXT_PRIMARY).toBe(colors.PRIMARY);
  });

  it('defines TEXT_SECONDARY color', () => {
    expect(colors.TEXT_SECONDARY).toBe('#A0AEC0');
  });
});

