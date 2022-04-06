/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-06 22:19:06
 * @LastEditors: tingqiang.tan
 * @LastEditTime: 2022-04-06 22:29:37
 * @FilePath: /canvas-demo/tchart/src/renderer/utils.js
 * @Description:
 */
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

export function mount(parent, child) {
  if (!parent) return;
  parent.appendChild(child);
}

export function applyTranform(element, transform) {
  const oldTransform = element.getAttribute('transform') || '';
  const prefix = oldTransform ? `${oldTransform} ` : '';
  element.setAttribute('transform', `${prefix} ${transform}`);
}
