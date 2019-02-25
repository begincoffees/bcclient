module.exports = {
  testMatch: [
    "<rootDir>/src/__tests__/**/*.(j|t)s?(x)",
    "<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}"
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/node_modules/jest-css-modules",
    "src/components": "<rootDir>/src/components*"
  },
  roots: [
    "<rootDir>"
  ],
  setupFiles: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    "ts-jest": {
      "tsConfigFile": "./tsconfig.test.json"
    }
  }
}