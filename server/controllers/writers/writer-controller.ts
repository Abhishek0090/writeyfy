import express, { Request, Response, NextFunction } from "express";
import db from "../../config/connect";
import moment from "moment/moment";
import { QueryError } from "mysql2";

export const handwritten = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const p =
    "SELECT id FROM writers_map WHERE email=? AND writing=1 ORDER BY id DESC";

  db.query(p, [req.params.email], (err: QueryError | null, data: any) => {
    if (err) return next(err);

    const q =
      "INSERT INTO writers_writing_details (writer_id,writing_capacity,  short_cost , long_cost , sample) Values(?,?,?,?,?)";

    const values = [
      data[0].id,
      req.body.writing_capacity,
      req.body.short_cost,
      req.body.long_cost,
      req.body.sample,
    ];

    db.query(q, values, (err: QueryError | null, data: any) => {
      if (err) return next(err);

      return res.status(200).json("Data successfully inserted");
    });
  });
};

export const technical_drawing = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const p =
    "SELECT id FROM writers_map WHERE email=? AND technical_drawing=1 ORDER BY id DESC";
  db.query(p, [req.params.email], (err: QueryError | null, data: any) => {
    if (err) return next(err);

    const q =
      "INSERT INTO writers_technical_drawing_details (writer_id , cost  ,sample) VALUES (?,?,?)";

    const values = [data[0].id, req.body.cost, req.body.sample];

    db.query(q, values, (err: QueryError | null, data: any) => {
      if (err) return next(err);

      return res.status(200).json("Data successfully inserted");
    });
  });
};

export const art_craft = (req: Request, res: Response, next: NextFunction) => {
  const p =
    "SELECT id FROM writers_map WHERE email=? AND art=1 ORDER BY id DESC";
  db.query(p, [req.params.email], (err: QueryError | null, data: any) => {
    if (err) return next(err);
    const q =
      "INSERT INTO writers_art_details (writer_id, type_of_models ,cost,sample) VALUES (?,?,?,?)";

    const values = [
      data[0].id,
      req.body.type_of_models,
      req.body.cost,
      req.body.sample,
    ];

    db.query(q, values, (err: any, data: any) => {
      if (err) return next(err);

      return res.status(200).json("Data successfully inserted");
    });
  });
};

export const writer_ppt = (req: Request, res: Response, next: NextFunction) => {
  const p =
    "SELECT * FROM writers_map WHERE email=? AND ppt=1 ORDER BY id DESC";
  db.query(p, [req.body.email], (err: QueryError | null, data: any) => {
    if (err) return next(err);
 
    const q =
      "INSERT INTO writers_ppt_details (`writer_id`, `speed`, `subjects_ppt`, `level_of_ppt`, `plagiarized`, `cost`, `sample`) VALUES (?,?,?,?,?,?,?)";

    const values = [
      data[0].id,
      req.body.speed,
      req.body.subjects_ppt,
      req.body.level_of_ppt,
      req.body.plagiarized,
      req.body.cost,
      req.body.sample,
    ];

    db.query(q, values, (err: QueryError | null, data: any) => {
      if (err) return next(err);

      return res.status(200).json("Data successfully inserted");
    });
  });
};
