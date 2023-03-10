const { override, useBabelRc } = require('customize-cra')

// eslint-disable-next-line prettier/prettier, react-hooks/rules-of-hooks
module.exports = override(useBabelRc())
