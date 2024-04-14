const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');

const bcrypt = require('bcrypt');
const User = require("./models/Login");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test');

// mongoose.connect('mongodb://localhost:27017/test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('MongoDB connected');
// })
// .catch(err => {
//   console.error('MongoDB connection error', err);
// });


app.post('/login', async (req, res) => {
  const { username, IDnumber, password } = req.body;

  const user = await User.findOne({ username: username });

  if (user && bcrypt.compareSync(password, IDnumber, user.password)) {
      // User authenticated successfully
      res.json('Login successful');
  } else {
      // Invalid credentials
      res.status(401).json('Invalid username or password');
  }
});


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
