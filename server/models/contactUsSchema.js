import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
    fullName: String,
    emailAddress: String,
    title: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  // Create a model for the contact form data
  const ContactModel = mongoose.model('ContactUs', contactUsSchema);
  export {ContactModel as ContactUs};