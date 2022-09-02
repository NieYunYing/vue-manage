/*
 * @Author: NYY
 * @Date: 2022-08-27 10:47:12
 * @LastEditTime: 2022-08-27 11:40:04
 * @LastEditors: NYY
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/multi-word-component-names":0
  }
}
