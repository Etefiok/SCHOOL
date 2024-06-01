import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserRouter } from "./routes/user.js";
// import { AdmissionFormRouter } from "./routes/admissionForm.js";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "jwttokenkey";
export { JWT_SECRET };

const app = express();
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/auth', UserRouter);
// app.use('/auth', AdmissionFormRouter);
// Serve the uploads directory as a static folder
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


mongoose.connect('mongodb://127.0.0.1:27017/SignUp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
