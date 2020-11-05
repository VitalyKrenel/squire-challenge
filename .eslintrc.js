module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': 'parcel',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'import/no-default-export': 'warn',
    /*
      'children' is hard to define using PropTypes,
      'className' providing PropType for className
        does not clarify component's contract as this prop
        is mostly used for Styled Components
    */
    'react/prop-types': ['warn', { ignore: ['children', 'className'] }],
    'react/require-default-props': 'off',
  },
};
