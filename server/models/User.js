import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Username: { type: String, required: true, unique: true },
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Password: { type: String, required: true },
  Confirmpassword: { type: String, required: true },
  IDnumber: { type: String, required: true },
  Phonenumber: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
});


const UserModel = mongoose.model('User', UserSchema);


export { UserModel as User};

