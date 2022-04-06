/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-06 14:57:16
 * @LastEditors: tingqiang.tan
 * @LastEditTime: 2022-04-06 15:09:28
 * @FilePath: /canvas-demo/tchart/src/drawRedRect.js
 * @Description:
 */
function drawRedRect(svg) {
  var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', 0);
  rect.setAttribute('y', 0);
  rect.setAttribute('fill', 'red');
  rect.setAttribute('width', 100);
  rect.setAttribute('height', 100);
  svg.appendChild(rect);
}

export { drawRedRect };
