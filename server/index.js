import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserRouter } from "./routes/user.js";
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

mongoose.connect('mongodb://127.0.0.1:27017/SignUp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});



















// mongoose.connect('mongodb://localhost:27017/Login');

// const UserSchema = new mongoose.Schema({
//   username: String, 
//   password: String,
//   idNumber: String, 
// });

// const UserModel = mongoose.model('Users', UserSchema);


// app.post('/login', (req, res) => {
//   const { username, IDnumber, password } = req.body;
//   UserModel.findOne({ username: username })
//   .then(user => {
//     if(user) {
//       if (user.password === password, user.idNumber === IDnumber) {
//         res.json('Login successfully');
//       }  else {
//         res.json('Invalid username or password');
//       }
//     } else {
//       res.json('No record existed')
//     }
//   })
// });


// app.post('/register', (req, res) => {
//   const { Username, Firstname, Lastname, IDnumber, Phonenumber, Email, Password, Confirmpassword} = req.body;
//   RegisterModel.findOne({ Firstname: Firstname })
//     .then(user => {
//       if (user) {
//         res.json("already have an account");
//       } else {
//         RegisterModel.create({ Username: Username, Firstname: Firstname, Lastname: Lastname, Password: Password, Confirmpassword: Confirmpassword, IDnumber: IDnumber, Phonenumber: Phonenumber, Email: Email,   })
//           .then(result => res.json("Account created"))
//           .catch(err => res.json({ error: err }));
//       }
//     })
//     .catch(err => res.json({ error: err }));
// });