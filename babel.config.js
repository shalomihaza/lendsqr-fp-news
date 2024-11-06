module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          api: './src/api',
          components: './src/components',
          hooks: './src/hooks',
          navigation: './src/navigation',
          features: './src/features',
          store: './src/store',
          theme: './src/theme',
          lib: './src/lib',
          utils: './src/utils',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
