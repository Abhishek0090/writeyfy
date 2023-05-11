import express, { Request, Response } from "express";
import {
  getWritersAll,
  getSpecificWriter,
} from "../controllers/writers/writers-data-controller";

const router: express.Router = express();

router.get("/getwriters", getWritersAll);
router.get("/getSpecificWriter/:id", getSpecificWriter);

export default router;
