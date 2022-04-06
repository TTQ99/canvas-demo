/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-06 15:06:49
 * @LastEditors: tingqiang.tan
 * @LastEditTime: 2022-04-06 15:20:02
 * @FilePath: /canvas-demo/tchart/jest.config.js
 * @Description:
 */
module.exports = {
  testMatch: ['**/__tests__/**/*.spec.js'], // 只测试后缀为 .spec.js 的文件
  runner: 'jest-electron/runner', // 指定测试的 runner
  testEnvironment: 'jest-electron/environment', //  制定测试的环境
};
