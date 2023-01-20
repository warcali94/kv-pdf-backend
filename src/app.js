import express from "express";
import cors from "cors";
import pdfRouter from "./routes/routers/pdfRouter.js";
const app = express();

app.use(cors());
app.use(pdfRouter);

export default app;
