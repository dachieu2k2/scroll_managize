module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  ignorePatterns: [
    'node_modules/*',
    '.next/*',
    '.out/*',
    '!.prettierrc.js',
    '.github/*',
  ], // We don"t want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  rules: {
    // Off
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'no-restricted-exports': 'off',
    endOfLine: 'off',
    'react/no-this-in-sfc': 'off',

    // Weak warning 0
    'import/no-unresolved': 'off',
    'no-case-declarations': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-lonely-if': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'prefer-template': 'off',
    'object-shorthand': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'import/order': 'off',
    'import/no-mutable-exports': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-prototype-builtins': 'off',
    'import/no-named-as-default': 'off',
    'global-require': 'off',
    'max-classes-per-file': 'off',
    'newline-per-chained-call': 'off',
    'default-param-last': 'off',
    'default-case': 'off',
    'max-len': ['off', { code: 80, ignorePattern: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/button-has-type': 'off',
    'no-continue': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Warning 1
    semi: 'off',
    'no-console': 'off',
    'max-statements-per-line': ['off', { max: 2 }],
    'react/jsx-filename-extension': ['off', { extensions: ['.ts', '.tsx'] }],
    quotes: [
      'off',
      'double',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'react-refresh/only-export-components': 'warn',

    // Error Off
    'import/no-cycle': 'off',
    'no-useless-return': 'off',
    'block-scoped-var': 'off',
    'no-var': 'off',
    'no-whitespace-before-property': 'off',
    camelcase: 'off',
    'prefer-const': 'off',
    'no-dupe-else-if': 'off',
    'no-duplicate-imports': 'off',
    'lines-between-class-members': 'off',
    'no-trailing-spaces': 'off',
    'keyword-spacing': 'off',
    'jsx-quotes': 'off',
    'comma-style': 'off',
    'comma-spacing': 'off',
    'arrow-spacing': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-no-bind': [
      'off',
      { allowBind: true, allowArrowFunctions: true },
    ],
    'no-multi-spaces': [
      'off',
      {
        ignoreEOLComments: true,
        exceptions: { ImportDeclaration: true },
      },
    ],
    'no-use-before-define': [
      'off',
      { functions: false, classes: false, variables: false },
    ],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-restricted-syntax': ['off', 'LabeledStatement', 'WithStatement'],
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          '**/test.{ts,tsx}', // repos with a single test file
          '**/test-*.{ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.ts', // jest config
          '**/jest.setup.ts', // jest setup
          '**/.eslintrc.js', // eslint config
        ],
        optionalDependencies: false,
      },
    ],
  },
};
