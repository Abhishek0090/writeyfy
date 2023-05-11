import express, { NextFunction, Request, Response } from "express";
import db from "../../config/connect";
import { QueryError } from "mysql2";

export const getWritersAll = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const q = "SELECT * FROM writers_map ORDER BY id ASC ";

  db.query(q, (err: QueryError | null, data: any[]) => {
    if (err) return next(err);

    res.status(200).json(data);
  });
};

export const getSpecificWriter = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const id = req.params.id;
  const q = "SELECT * FROM writers_map WHERE id =? ORDER BY id ASC ";

  db.query(q, [id], (err: QueryError | null, data: any[]) => {
    if (err) return next(err);

    res.status(200).json(data);
  });
};
