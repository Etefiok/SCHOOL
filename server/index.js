const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test');
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


app.post('/register', (req, res) => {
  const { Username, Firstname, Lastname, IDnumber, Phonenumber, Role, Password, Confirmpassword} = req.body;
  RegisterModel.findOne({ Firstname: Firstname })
    .then(user => {
      if (user) {
        res.json("already have an account");
      } else {
        RegisterModel.create({ Username: Username, Firstname: Firstname, Lastname: Lastname, Password: Password, Confirmpassword: Confirmpassword, IDnumber: IDnumber, Phonenumber: Phonenumber, Role: Role,   })
          .then(result => res.json("Account created"))
          .catch(err => res.json({ error: err }));
      }
    })
    .catch(err => res.json({ error: err }));
});

app.listen(5000, () => {
  console.log('Server is Running in port 5000');
});
