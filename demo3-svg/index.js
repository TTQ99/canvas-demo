/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-02 11:15:42
 * @LastEditors: tingqiang.tan
 * @LastEditTime: 2022-04-02 11:31:56
 * @FilePath: /canvas-demo/demo3-svg/index.js
 * @Description:
 */
const data = [
  { name: "jack", num: "120" },
  { name: "bob", num: "230" },
  { name: "john", num: "300" },
];
const chartWidth = 480;
const chartHeight = 300;
const margin = 15;

const containerWidth = chartWidth + margin * 2;
const containerHeight = chartHeight + margin * 2;

const names = Array.from(data, (d) => d.name);
const values = Array.from(data, (d) => d.num);
const includes = Array.from(data, (_, i) => i);

const step = chartWidth / names.length;
const barWidth = step * 0.8;
const xs = Array.from(includes, (i) => i * step);
const y = chartHeight;

const vmax = Math.max(...values);
const barHeights = Array.from(values, (v) => chartHeight * (v / vmax));

const nameColor = {
  jack: "green",
  bob: "blue",
  john: "pink",
};

const colors = Array.from(names, (name) => nameColor[name]);

// 使用svg 绘制

function createSVGElement(type) {
  return document.createElementNS("http://www.w3.org/2000/svg", type);
}
const svg = document.querySelector("#container-svg");

svg.setAttribute("width", containerWidth);
svg.setAttribute("height", containerHeight);
svg.setAttribute("viewBox", [0, 0, containerWidth, containerHeight]);

const g = createSVGElement("g");
g.setAttribute("transform", `translate(${margin}, ${margin})`);
svg.appendChild(g);

for (const index of includes) {
  const color = colors[index];
  const x = xs[index];
  const barHeight = barHeights[index];
  const value = values[index];

  const rect = createSVGElement("rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y - barHeight);
  rect.setAttribute("fill", color);
  rect.setAttribute("width", barWidth);
  rect.setAttribute("height", barHeight);
  g.appendChild(rect);
}
