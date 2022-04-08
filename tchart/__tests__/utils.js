/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-06 15:11:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-07 11:10:53
 * @FilePath: /canvas-demo/tchart/__test__/utils.js
 * @Description:
 */

export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function getAttributes(node, attributes) {
  return attributes.reduce(
    (total, cur) => ((total[cur] = node.getAttribute(cur)), total),
    {}
  );
}
