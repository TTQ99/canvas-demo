/*
 * @Author: tingqiang.tan
 * @Date: 2022-04-01 21:09:40
 * @LastEditors: tingqiang.tan
 * @LastEditTime: 2022-04-01 21:29:12
 * @FilePath: /canvas-demo/demo1/index.js
 * @Description:
 */
const canvas = document.querySelector("#canvas");

const context = canvas.getContext("2d");

// context.fillStyle = "red";
// context.strokeStyle = "blue";
// context.lineWidth = 6;
// context.strokeRect(3, 3, 100, 100);
// context.fillRect(6, 6, 94, 94);

context.fillStyle = "red";
context.fillRect(0, 0, 50, 50);

context.fillStyle = "blue";
context.translate(50, 50);
context.rotate(-Math.PI / 6);
context.scale(2, 3);
context.fillRect(0, 0, 50, 50);
