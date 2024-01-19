module.exports = {
  // window와 mac에 따른 줄바꿈 스타일을 자동으로 변경해줍니다
  'linebreak-style': ['error', require('os').EOL === '\r\n' ? 'windows' : 'unix'],
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-explicit-any': 'off', //any가 안나오게 만들어줌
  },
};
