/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-06 22:25:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-07 11:15:49
 * @FilePath: /canvas-demo/tchart/src/renderer/renderer.js
 * @Description:
 */

import { createContext } from './context';
import { line, circle, text, rect, path, ring } from './shape';
import { restore, save, scale, translate, rotate } from './transform';

export function createRenderer(width, height) {
  const context = createContext(width, height);
  return {
    // eslint-disable-next-line no-undef
    line: (options) => line(context, options),
    circle: (options) => circle(context, options),
    text: (options) => text(context, options),
    rect: (options) => rect(context, options),
    path: (options) => path(context, options),
    ring: (options) => ring(context, options), // 绘制圆环
    restore: () => restore(context),
    save: () => save(context),
    scale: (...args) => scale(context, ...args),
    rotate: (...args) => rotate(context, ...args),
    translate: (...args) => translate(context, ...args),
    node: () => context.node, // 下面会讲解
    group: () => context.group, // 下面会讲解
  };
}
