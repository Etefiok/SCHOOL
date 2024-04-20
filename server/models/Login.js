// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');



// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/login');

// const UserSchema = new mongoose.Schema({
//     username: String, 
//     password: String,
//     idNumber: String, 
// });

// const UserModel = mongoose.model('Users', UserSchema);

// app.post('/login', (req, res) => {
//     const { username, IDnumber, password } = req.body;
//     UserModel.findOne({ username: username })
//     .then(user => {
//       if(user) {
//         if (user.password === password, user.idNumber === IDnumber) {
//           res.json('Login successfully');
//         }  else {
//           res.json('Invalid username or password');
//         }
//       } else {
//         res.json('No record existed')
//       }
//     })
//   });

  // app.listen(5000, () => {
  //   console.log('Server is Running in port 5000');
  // });