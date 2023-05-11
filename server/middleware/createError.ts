import { NextFunction } from "express";
import { Response } from "express";
import express, { Request } from "express";
// const createError = (status : any, message : any) => {
//     const err = new Error();
//     err.status = status;
//     err.message = message;

//     return err;
//   };

//   export default createError;

export const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};
