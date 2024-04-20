import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const {
    Username,
    Firstname,
    Lastname,
    IDnumber,
    Phonenumber,
    Email,
    Password,
    Confirmpassword,
  } = req.body;

  try {
    const existingUser = await UserModel.findOne({ Username: Username });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(Password, 10);

    const newUser = new UserModel({
      Username,
      Firstname,
      Lastname,
      IDnumber,
      Phonenumber,
      Email,
      Password: hashPassword,
      Confirmpassword,
    });

    await newUser.save();
    return res.json({ message: "Record registered" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

export { router as UserRouter };



