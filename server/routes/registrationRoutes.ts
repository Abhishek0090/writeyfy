import express, { Request, Response } from "express";
import { register } from "../controllers/writers/registration-controller";

const router: express.Router = express.Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register the writer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the writer
 *               email:
 *                 type: string
 *                 description: Email of the writer
 *               number:
 *                 type: integer
 *                 description: Number of the writer
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Writer Registered successfully
 *         produces:
 *           - application/json
 *         consumes:
 *           - application/json
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

router.post("/register", register);

export default router;
