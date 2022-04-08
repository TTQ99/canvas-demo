/*
 * @Author: your name
 * @Date: 2022-04-07 11:17:54
 * @LastEditTime: 2022-04-07 11:17:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /canvas-demo/tchart/__tests__/renderer/transform.spec.js
 */
import { createRenderer } from '../../src/renderer';
import { createDiv, mount } from '../utils';

describe('transform', () => {
  test('Renderer should apply specified transforms and can save or restore transforms context.', () => {
    const renderer = createRenderer(600, 400);

    renderer.save();
    renderer.translate(200, 100);
    renderer.rotate(60);
    renderer.scale(2, 3);
    const r1 = renderer.rect({
      x: 0,
      y: 0,
      width: 50,
      height: 50,
    });
    renderer.restore();

    const r2 = renderer.rect({
      x: 0,
      y: 0,
      width: 50,
      height: 50,
    });

    mount(createDiv(), renderer.node());

    expect(r1.parentNode.getAttribute('transform')).toBe(
      'translate(200, 100) rotate(60) scale(2, 3)'
    );
    expect(r2.parentNode.getAttribute('transform')).toBeNull();
  });
});
