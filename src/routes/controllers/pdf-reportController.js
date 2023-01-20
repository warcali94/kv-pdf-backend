import exceptionWrapper from "../routers/exceptionWrapper.js";
import updatePDF from "../../services/updatePDFService.js";
import showPDF from "../../services/showPDFService.js";

const updater = exceptionWrapper(async (req, res) => {
  // console.log("PARAMETROS", req.query);
  const result = await updatePDF(req.query);
  res.status(200).send(result);
});

const shower = exceptionWrapper(async (req, res) => {
  const result = "HOLA MUNDO";
  res.status(200).send(result);
});

export { updater, shower };
