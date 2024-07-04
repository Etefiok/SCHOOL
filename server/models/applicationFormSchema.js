import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  position: { type: String, required: true },
  resume: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const ApplicationForm = mongoose.model('ApplicationForm', applicationSchema);

export { ApplicationForm };