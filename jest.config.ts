import nextJest from "next/jest";

const createCustomJestConfig = nextJest({
  dir: "./",
});

export default createCustomJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
});
