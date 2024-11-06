module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^components/ (.*)$': '<rootDir>/src/components/*',
    '^store/ (.*)$': '<rootDir>/src/store/*',
    '^hooks/ (.*)$': '<rootDir>/src/hooks/*',
    '^navigation/ (.*)$': '<rootDir>/src/navigation/*',
    '^features/ (.*)$': '<rootDir>/src/features/*',
    '^theme/ (.*)$': '<rootDir>/src/theme/*',
    '^lib/ (.*)$': '<rootDir>/src/lib/*',

    '^utils/ (.*)$': '<rootDir>/src/utils/*',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-firebase/auth/*)',
  ],
  setupFiles: ['./__mocks__/setupFiles.js'],
  testEnvironment: 'node',
};
