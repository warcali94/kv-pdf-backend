import express from "express";
import { updater, shower } from "../controllers/pdf-reportController.js";

const pdfRouter = new express.Router();
const pdfPath = "/pdf";
pdfRouter.get(`${pdfPath}`, shower);
pdfRouter.put(`${pdfPath}`, updater);

export default pdfRouter;
