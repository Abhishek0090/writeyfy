import express, { Request, Response } from "express";
import {
  sendotp,
  InsertEmailOtp,
  InsertMobileOtp,
  verifyEmail,
  verifyNumber,
} from "../controllers/writers/otp/otp-controller";

const router: express.Router = express.Router();

router.post("/sendotp", sendotp);

/**
 * @swagger
 *
 * /verify/InsertEmailOtp:
 *   post:
 *     summary: Insert Email Otp in Database
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Enter Your Email Address
 *               otp:
 *                 type: integer
 *                 description: Enter Your Email Otp
 *               generation:
 *                 type: date
 *                 description: Enter Your Generation Date
 *     responses:
 *       200:
 *         description: Otp Inserted successfully
 *       400:
 *         description: Something went Wrong
 *       500:
 *         description: Internal Server Error
 */

router.post("/insertemailotp", InsertEmailOtp);

/**
 * @swagger
 *
 * /verify/InsertMobileOtp:
 *   post:
 *     summary: Insert Mobile Otp in Database
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: string
 *                 description: Enter Your Mobile Otp
 *               otp:
 *                 type: integer
 *                 description: Enter Your Mobile Otp
 *               generation:
 *                 type: date
 *                 description: Enter Your Generation Date
 *     responses:
 *       200:
 *         description: Otp Inserted successfully
 *       400:
 *         description: Something went Wrong
 *       500:
 *         description: Internal Server Error
 */

router.post("/insertmobileotp", InsertMobileOtp);

/**
 * @swagger
 *
 * /verify/verifyemail:
 *   get:
 *     summary: Verify Email Now
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Otp Verified Successfully
 */

router.get("/verifyemail", verifyEmail);

/**
 * @swagger
 *
 * /verify/verifymobile:
 *   get:
 *     summary: Verify Mobile Now
 *     requestBody:
 *     content:
 *       application/json:
 *     parameters:
 *       - number: body
 *       - in: body
 *         schema:
 *           type: object
 *           properties:
 *             number:
 *               type: integer
 *             otp:
 *               type: integer
 *     responses:
 *       200:
 *         description: Otp Verified Successfully
 */

router.get("/verifymobile", verifyNumber);

export default router;
