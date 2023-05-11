import express, { Request, Response, NextFunction } from "express";
import db from "../../config/connect";
import moment from "moment/moment";
import { QueryError } from "mysql2";

export const register = (req: Request, res: Response): void => {
  const emailQuery =
    "SELECT * FROM writer_email_otp WHERE email=? ORDER BY id DESC LIMIT 1";
  const numberQuery =
    "SELECT * FROM writer_number_otp WHERE number=? ORDER BY id DESC LIMIT 1";

  //check signup
  const checkSignup = "SELECT * FROM writers_map WHERE email? ORDER BY id DESC";

  db.query(
    checkSignup,
    [req.body.email],
    (err: QueryError | null, data: any) => {
      if (err) return res.status(500).json(err);

      if (data.length) return res.status(409).json("Writer Already Exists !");

      //check verified email
      db.query(
        emailQuery,
        [req.body.email],
        (err: QueryError | null, data: any) => {
          if (err) return res.status(500).json(err);

          let verified_email: any, verified_number;

          {
            data.map((row: any) => {
              let generateDate = row.generation;

              let expiryDate = row.expiry;

              if (generateDate > expiryDate) {
                verified_email = 1;
              } else {
                verified_email = 0;
              }
            });
          }

          db.query(
            numberQuery,
            [req.body.number],
            (err: QueryError | null, data: any) => {
              if (err) return res.status(500).json(err);

              let verified_number: any;

              {
                data.map((element: any) => {
                  if (
                    element.generation <=
                    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") <=
                    element.expiry
                  ) {
                    verified_number = 1;
                  } else if (
                    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") >
                    element.expiry
                  ) {
                    verified_number = 0;
                  }
                });
              }

              const registerQuery =
                "INSERT INTO writers_map( `name`, `email`,`email_verified`,`number_verified`, `number`,`country`,`country_code`,`city` , `date_of_birth`,`state`,`whatsapp_number`,`pin_code`,`bank_name`,`account_number`,`ifsc_code` , `branch_code` ,`beneficiary_name`,`pan_number`,`qualification`,`occupation`,`bio`,`profile_pic`,`date_of_joining` , `writing`,`ppt`,`technical_drawing`,`art` ,`is_approved`,`date_of_approval`) VALUES (?)";

              const values = [
                req.body.firsname + " " + req.body.lastname,
                req.body.email,
                verified_email,
                req.body.number,
                verified_number,
                req.body.country,
                req.body.country_code,
                req.body.city,
                req.body.date_of_birth,
                req.body.state,
                req.body.whatsapp_number,
                req.body.pin_code,
                req.body.bank_name,
                req.body.account_number,
                req.body.ifsc_code,
                req.body.branch_code,
                req.body.beneficiary_name,
                req.body.pan_number,
                req.body.qualification,
                req.body.occupation,
                req.body.bio,
                req.body.profile_pic,
                moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                req.body.writing,
                req.body.ppt,
                req.body.technical_drawing,
                req.body.art,
                1,
                moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
              ];

              db.query(
                registerQuery,
                [values],
                (err: QueryError | null, data: any) => {
                  if (err) return res.status(500).json(err);

                  const result = "SELECT * FROM writers_map ORDER BY id DESC";

                  db.query(result, [], (err: QueryError | null, data: any) => {
                    if (err) return res.status(500).json(err);

                    return res.status(200).json(data);
                  });
                }
              );
            }
          );
        }
      );
    }
  );
};
