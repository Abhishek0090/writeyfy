import nodemailer, { Transporter } from "nodemailer";
import express, { Request, Response } from "express";
import moment from "moment";
import db from "../../../config/connect";

// create reusable transporter object using the default SMTP transport
const transporter: Transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "palabhishek411@gmail.com",
    pass: "",
  },
});

// generate OTP code
function generateOTP(): string {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

// send OTP code to the user's email
function sendOTP(userEmail: string): string {
  const OTP = generateOTP();
  const mailOptions = {
    from: "palabhishek411@gmail.com",
    to: userEmail,
    subject: "OTP Verification",
    text: `Your OTP code is ${OTP}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return OTP;
}

// moment(currentTime).format("hh:mm"))

export const sendotp = (req: Request, res: Response) => {
  // test sending OTP code to user's email

  try {
    // sendOTP(req.body.email);

    res.status(200).json(generateOTP());
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const InsertEmailOtp = (req: Request, res: Response) => {
  var currentime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  var expiry_date = moment(currentime)
    .add(5, "minutes")
    .format("YYYY-MM-DD HH:mm:ss");

  const q =
    "INSERT INTO writer_email_otp (`email` , `otp` , `generation`  , `expiry`) VALUES (?)";

  const values = [
    req.body.email,
    req.body.otp,
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    expiry_date,
  ];

  db.query(q, [values], (err: any, data: any) => {
    if (err) return res.status(500).json(err);

    res.status(200).json({
      status: "success",
      message: "OTP code Insert successfully",
    });
  });
};

export const InsertMobileOtp = (req: Request, res: Response) => {
  var currentime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  var expiry_date = moment(currentime)
    .add(5, "minutes")
    .format("YYYY-MM-DD HH:mm:ss");

  const q =
    "INSERT INTO writer_number_otp (`number` , `otp` , `generation`  , `expiry`) VALUES (?)";

  const values = [
    req.body.number,
    req.body.otp,
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    expiry_date,
  ];

  db.query(q, [values], (err: any, data: any) => {
    if (err) return res.status(500).json(err);

    res.status(200).json({
      status: "success",
      message: "OTP code Insert successfully",
    });
  });
};

export const verifyEmail = (req: Request, res: Response) => {
  const q = "SELECT * FROM writer_email_otp WHERE email =? ORDER BY id DESC LIMIT 1";

  db.query(q, [req.body.email], (err: any, data: any) => {
    if (err) return res.status(500).json(err);

    data.forEach((element: any): any => {
      let verified_email;
      if (element.otp === req.body.otp) {
        if (
          element.generation <=
          moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") <=
          element.expiry
        ) {
          verified_email = "OTP Verified";
        } else if (
          moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") > element.expiry
        ) {
          verified_email = "OTP Expired";
        }
      } else {
        verified_email = "Invalid OTP Please Enter a Valid OTP";
      }
      return res.status(200).json(verified_email);
    });
  });
};

export const verifyNumber = (req: Request, res: Response) => {
  const q = "SELECT * FROM writer_number_otp WHERE number =? ORDER BY id DESC LIMIT 1";
  db.query(q, [req.body.number], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    console.log(data);
    data.forEach((element: any): any => {
      console.log(element.generation);
      let verified_number;
      if (element.otp == req.body.otp) {
        if (
          element.generation <=
          moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") <=
          element.expiry
        ) {
          verified_number = "OTP Verified";
        } else if (
          moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") > element.expiry
        ) {
          verified_number = "OTP Expired";
        }
        return res.status(200).json(verified_number);
      }
    });
  });
};
