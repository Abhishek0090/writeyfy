import express, { Request, Response } from "express";
import {
  art_craft,
  handwritten,
  technical_drawing,
  writer_ppt,
} from "../controllers/writers/writer-controller";

const router: express.Router = express.Router();

/**
 * @swagger
 * /writer/handwritten:
 *   post:
 *     summary: Submit Handwritten Writer Data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               writing_capacity:
 *                 type: integer
 *                 description: Enter Writer Capacity
 *               short_cost:
 *                 type: integer
 *                 description: Enter Short Cost
 *               long_cost:
 *                 type: integer
 *                 description: Enter Long Cost
 *     responses:
 *       200:
 *         description: Handwritten Data Inserted successfully
 *         produces:
 *           - application/json
 *         consumes:
 *           - application/json
 *         parameters:
 *           - email: email
 *             schema:
 *               type: object
 *               properties:
 *                 writing_capacity:
 *                   type: integer
 *                   description: Enter Writer Capacity
 *                 short_cost:
 *                   type: integer
 *                   description: Enter Short Cost
 *                 long_cost:
 *                   type: integer
 *                   description: Enter Long Cost
 */

router.post("/handwritten", handwritten);

/**
 * @swagger
 * /writer/technicaldrawing:
 *   post:
 *     summary: Submit Technical Drawing Writer Data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cost:
 *                 type: integer
 *                 description: Enter Cost
 *               sample:
 *                 type: string
 *                 description: File Uploaded Successfully
 *     responses:
 *       200:
 *         description: Technical Drawing Data Inserted successfully
 *         produces:
 *           - application/json
 *         consumes:
 *           - application/json
 *         parameters:
 *           - email: email
 *             schema:
 *               type: object
 *               properties:
 *                 cost:
 *                   type: integer
 *                   description: Enter Cost
 *                 sample:
 *                   type: string
 *                   description: File Uploaded Successfully
 */

router.post("/technicaldrawing", technical_drawing);

/**
 * @swagger
 * /writer/artcraft:
 *   post:
 *     summary: Submit ArtCraft Writer Data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type_of_models:
 *                 description: Enter Type of Models
 *               cost:
 *                 type: integer
 *                 description: Enter Cost
 *               sample:
 *                 type: string
 *                 description: File Uploaded Successfully
 *     responses:
 *       200:
 *         description: ArtCraft Data Inserted successfully
 *         produces:
 *           - application/json
 *         consumes:
 *           - application/json
 *         parameters:
 *           - email: email
 *             schema:
 *               type: object
 *               properties:
 *                 type_of_models:
 *                   description: Enter Type of Models
 *                 cost:
 *                   type: integer
 *                   description: Enter Cost
 *                 sample:
 *                   type: string
 *                   description: File Uploaded Successfully
 */

router.post("/artcraft", art_craft);

/**
 * @swagger
 * /writer/ppt:
 *   post:
 *     summary: Submit ppt Writer Data
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: ppt
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - speed
 *                 - subjects_ppt
 *                 - level_of_ppt
 *                 - plagerized
 *                 - cost
 *                 - sample
 *               properties:
 *                 email:
 *                   type: string
 *                 speed:
 *                   type: integer
 *                 subjects_ppt:
 *                   type: string
 *                 level_of_ppt:
 *                   type: string
 *                 plagerized:
 *                   type: integer
 *                 cost:
 *                   type: integer
 *                 sample:
 *                   type: string
 *     responses:
 *       200:
 *         description: PPT Data Inserted successfully
 */

router.post("/ppt", writer_ppt);

export default router;
