import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://localhost:38020/umbraco/swagger/time/swagger.json',
  output: {
    lint: false,
    path: 'src/api'
  },
  debug: true,
  schemas: false,
  types: {
    enums: 'typescript'
  }
});