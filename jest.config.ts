import { pathsToModuleNameMapper  } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

export default {
  clearMocks: true,
  
  coverageDirectory: "coverage",

  testEnvironment: "node",

  
  oduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
};
