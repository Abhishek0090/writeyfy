import express, { NextFunction, Request, Response } from "express";
import db from "../../config/connect";
import { QueryError } from "mysql2";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtkey: any = process.env.SECRET_KEY;

interface user {
  id: number;
  name: string;
  email: string;
  password: string;
  location: string;
}

export const signup = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const q: string = "INSERT INTO user_details VALUES(?,?,?,?,?,?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.number,
    req.body.password,
    req.body.location,
    req.body.date_of_birth,
  ];

  db.query(q, [values], (err: QueryError | null, data: any) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json({
      status: 200,
      data: data,
    });
  });
};

export const signin = (req: Request, res: Response) => {
  const q = "SELECT * FROM users_details WHERE email =? ";

  db.query(q, [req.body.email], (err: QueryError | null, data: any) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) return res.status(404).json("User not found");

    //checking password
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong Password or Email !");

    const token = jwt.sign({ id: data[0].id }, jwtkey);

    const { password, ...others } = data[0]; // avoiding password to show while fetching

    //for storing our data in cookie
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const signout = (req: Request, res: Response) => {
  //for deleting our cookie
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none", //for restricting the blockage of website while clearing cookie
    })
    .status(200)
    .json("User has been Logged out");
};
