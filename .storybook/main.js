/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/components/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    "@storybook/addon-links",
    '@storybook/addon-jest',
    "@storybook/addon-essentials", 
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-docs', 
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  staticDirs: ["..\\public"],
};
export default config;
