/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-01 21:39:26
 * @LastEditors: tingqiang.tan
 * @LastEditTime: 2022-04-01 22:21:25
 * @FilePath: /canvas-demo/demo2/index.js
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
console.log(colors);

console.log("12");
const canvas = document.querySelector("canvas");

canvas.style.width = chartWidth + "px";
canvas.style.height = chartHeight + "px";

canvas.width = chartWidth * 2;
canvas.height = chartHeight * 2;

const context = canvas.getContext("2d");
context.scale(2, 2);
context.translate(margin, margin);

for (const index of includes) {
  const color = colors[index];
  const x = xs[index];
  const barHeight = barHeights[index];
  const value = values[index];

  context.fillStyle = color;
  context.fillRect(x, y - barHeight, barWidth, barHeight);

  // 绘制文本
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "white";
  context.font = "25px PingFangSC-Regular, sans-serif";
  context.fillText(value, x + barWidth / 2, y - barWidth / 2);
}
