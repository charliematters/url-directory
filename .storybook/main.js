module.exports = {
  stories: [
    '../src/**/*.stories.js',
    '../src/**/*.stories.tsx',
    // '../src/features/subscriptions/components/*.stories.tsx'
  ],
  addons: [
    // '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register'
  ],

};
