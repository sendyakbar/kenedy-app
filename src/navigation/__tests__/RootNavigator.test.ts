import { rootScreensConfig } from '../RootNavigator';

describe('RootNavigator configuration', () => {
  it('contains expected screens', () => {
    expect(rootScreensConfig).toBeTruthy();
    const screens = rootScreensConfig.screens as Record<string, any>;
    expect(Object.keys(screens)).toEqual(
      expect.arrayContaining(['ProfileScreen', 'ExperiencesScreen', 'JobMatchesScreen'])
    );
  });

  it('sets correct titles for screens', () => {
    const screens = rootScreensConfig.screens as Record<string, any>;
    expect(screens.ProfileScreen.options.headerShown).toBe(false);
    expect(screens.ExperiencesScreen.options.headerShown).toBe(false);
    expect(screens.JobMatchesScreen.options.headerShown).toBe(false);
  });
});
