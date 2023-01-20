const commonSettings = {
  size: 10,
  lineHeight: 24,
  // color: pdfLib.rgb(1, 0, 0),
  // opacity: 1,
};
const writeName = async (page, font, text) =>
  page.drawText(text, {
    x: 162,
    y: 673,
    font: font,
    ...commonSettings,
  });

const writeAge = async (page, font, text) =>
  page.drawText(text, {
    x: 162,
    y: 620,
    font: font,
    ...commonSettings,
  });

const writeWeight = async (page, font, text) =>
  page.drawText(text, {
    x: 162,
    y: 648,
    font: font,
    ...commonSettings,
  });

export { writeName, writeAge, writeWeight };
