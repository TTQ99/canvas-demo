import { applyAttribute, createSVGElement, mount } from './utils';

/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-07 10:55:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-07 11:09:43
 * @FilePath: /canvas-demo/tchart/src/renderer/shape.js
 * @Description:
 */
export function shape(type, context, attributes) {
  const { group } = context;

  const el = createSVGElement(type);
  applyAttribute(el, attributes);
  mount(group, el);
  return el;
}

export function line(context, attributes) {
  return shape('line', context, attributes);
}

export function circle(context, attributes) {
  return shape('circle', context, attributes);
}

export function rect(context, attributes) {
  const { width, height, x, y } = attributes;
  return shape('rect', context, {
    ...attributes,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  });
}

export function text(context, attributes) {
  const { text, ...rest } = attributes;
  const textElement = shape('text', context, rest);
  textElement.textContent = text;
  return textElement;
}

export function path(context, attributes) {
  const { d } = attributes;
  return shape('path', context, { ...attributes, d: d.flat().join(' ') });
}

export function ring(context, attributes) {
  // r1 是内圆的半径，r2 是外圆的半径
  const { cx, cy, r1, r2, ...styles } = attributes;
  const { stroke, strokeWidth, fill } = styles;
  const defaultStrokeWidth = 1;
  const innerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r1,
  });
  const ring = circle(context, {
    ...styles,
    strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
    stroke: fill,
    fill: 'transparent',
    cx,
    cy,
    r: (r1 + r2) / 2,
  });
  const outerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  });
  return [innerStroke, ring, outerStroke];
}
