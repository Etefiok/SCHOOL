const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test');

app.post('/register', (req, res) => {
  const { Firstname, password, confirmpassword } = req.body;
  RegisterModel.findOne({ Firstname: Firstname })
    .then(user => {
      if (user) {
        res.json({ message: "already have an account" });
      } else {
        RegisterModel.create({ Firstname: Firstname, password: password, confirmpassword: confirmpassword })
          .then(result => res.json({ message: "Account created" }))
          .catch(err => res.json({ error: err }));
      }
    })
    .catch(err => res.json({ error: err }));
});

app.listen(5000, () => {
  console.log('Server is Running in port 5000');
});
