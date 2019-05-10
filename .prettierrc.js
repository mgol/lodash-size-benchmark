'use strict';

// See https://prettier.io/docs/en/options.html
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  overrides: [
    {
      files: 'packages/{bento,yama}/**/*.js',
      options: {
        // JS files are not compiled to ES5 so trailing commas in function
        // parameters would break in older browsers.
        trailingComma: 'es5',
      },
    },
    // SCSS formatting is not enabled for now because of a few serious
    // bugs with single-line comments. See:
    // * https://github.com/prettier/prettier/issues/5603
    // * https://github.com/prettier/prettier/issues/5855
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
