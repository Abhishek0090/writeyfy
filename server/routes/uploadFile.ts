import express from "express";
import multer from "multer";
const router = express.Router();
import path from "path";

// console.log(path.join(__dirname,));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/profile", upload.single("file"), (req, res) => {
  const file = req.file;
  try {
    return res.status(200).json(file);
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
});

router.post("/sample", upload.single("file"), (req, res) => {
  const file = req.file;
  try {
    return res.status(200).json(file);
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
});

export default router;
