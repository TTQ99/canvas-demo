/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-06 15:10:56
 * @LastEditors: tingqiang.tan
 * @LastEditTime: 2022-04-06 15:16:24
 * @FilePath: /canvas-demo/tchart/__test__/index.spec.js
 * @Description:
 */

import { drawRedRect } from '../src';

describe('test', () => {
  test('drawRedRect()', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', 400);
    svg.setAttribute('height', 400);
    svg.setAttribute('viewBox', [0, 0, 400, 400]);
    document.body.appendChild(svg);
    drawRedRect(svg);
    expect(svg.getElementsByTagName('rect').length).toBe(1);
  });
});
