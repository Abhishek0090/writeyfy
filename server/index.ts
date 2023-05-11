import express, { Request, Response, NextFunction } from "express";
import db from "./config/connect";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import cookieParser from "cookie-parser";

import RegistrationRoutes from "./routes/registrationRoutes";
import OtpRoutes from "./routes/otpRoutes";
import writersRoutes from "./routes/writersRoutes";
import uploadFile from "./routes/uploadFile";
import writerDataRoutes from "./routes/writersDataRoutes";

import userRoutes from "./routes/users/userRoutes";

import { ErrorHandler } from "./middleware/createError";

import swaggerSpec from "./Services/swagger";

import * as dotenv from "dotenv";

const app = express();

const PORT: number = 9000;

dotenv.config();

app.use(express.json());

///middlewares

const valid: boolean = true;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Credentials"); //for sending our cookies on client

  next();
});
app.use(cors());

app.use(cookieParser()); //cookie

// Serve swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//file upload setup and to server inside public folder
// to serve images inside public folder
// app.use("/upload", uploadFile);

db.connect((err: any) => {
  if (err) {
    console.error("Failed to connect to database:", err);
    return;
  }
  console.log("Connected to database.");
});

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/", RegistrationRoutes);
app.use("/verify", OtpRoutes);
app.use("/writer", writersRoutes);
app.use("/upload", uploadFile);

app.use("/writersData", writerDataRoutes);

app.use("/user", userRoutes);

// ERROR HANDLER MIDDLEWARE (Last middleware to use)
app.use(ErrorHandler);
