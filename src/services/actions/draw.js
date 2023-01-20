import { rgb } from "pdf-lib";
// const rectangle = async (page) =>
// await page.drawRectangle({
// x: 50,
// y: 515,
// width: 500,
// height: 225,
// borderWidth: 2,
// color: rgb(1, 1, 1),
// borderColor: rgb(1, 0, 0),
// borderOpacity: 0.2,
// });

const commonSettings = {
  width: 100,
  height: 20,
  // borderWidth: 2,
  color: rgb(1, 1, 1),
  // borderColor: rgb(0.8, 0.8, 0.8),
  // borderOpacity: 1,
};
const drawName = async (page) =>
  await page.drawRectangle({
    x: 160,
    y: 668,
    ...commonSettings,
  });

const drawWeight = async (page) =>
  await page.drawRectangle({
    x: 160,
    y: 642,
    ...commonSettings,
  });
const drawAge = async (page) =>
  await page.drawRectangle({
    x: 160,
    y: 615,
    ...commonSettings,
  });

export { drawName, drawWeight, drawAge };
