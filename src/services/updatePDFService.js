import fs from "fs";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { drawName, drawWeight, drawAge } from "./actions/draw.js";
import { writeAge, writeName, writeWeight } from "./actions/write.js";

export default async (req) => {
  const readPDF = fs.readFileSync(`./src/resources/${"pdf-report.pdf"}`);
  const loadPDF = await PDFDocument.load(readPDF);
  const font = await loadPDF.embedFont(StandardFonts.Helvetica);
  const page = loadPDF.getPage(0);
  readPDF && req ? await updatePDF(req, page, font) : {};
  const pdfResp = await loadPDF.save();
  fs.writeFileSync("pdf-reporte.pdf", pdfResp);
};

const updatePDF = async (params, page, font) => {
  const { name, age, weight } = params || "";
  try {
    await drawName(page);
    await drawWeight(page);
    await drawAge(page);
    await writeName(page, font, name);
    await writeWeight(page, font, weight);
    await writeAge(page, font, age);
  } catch (error) {
    throw error;
  }
  return true;
};
