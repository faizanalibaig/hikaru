import express, { Request, Response } from "express";
const { global_error_handler } = require("../utils/global-error-handler");
const router = express.Router();

router.route("/").all((req: Request, res: Response) => {
  res.status(200).json({ message: "Hikaru, backend" });
});

router.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

router.use(global_error_handler);

module.exports = router;
