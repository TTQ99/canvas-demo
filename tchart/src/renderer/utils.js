/*
 * @Author: your name
 * @Date: 2022-04-06 22:19:06
 * @LastEditTime: 2022-04-07 11:01:16
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /canvas-demo/tchart/src/renderer/utils.js
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

export function applyAttribute(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    const kebabCaseKey = key.replace(
      /[A-Z]/g,
      (d) => `-${d.toLocaleLowerCase()}`
    );
    element.setAttribute(kebabCaseKey, value);
  }
}
