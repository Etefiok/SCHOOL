// models/AdmissionForm.js
import mongoose from "mongoose";

const admissionFormSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  motherName: { type: String, required: true },
  dob: { type: String, required: true },
  residentialAddress: { type: String, required: true },
  email: { type: String, required: true },
  className: { type: String, required: true },
  motherTongue: { type: String, required: true },
  religion: { type: String, required: true },
//   birthCertificate: { type: String, required: true },
  passportImage: { type: String, required: true },
  placeOfBirth: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  lastSchoolAttended: { type: String, required: true },
  admissionStandard: { type: String, required: true },
  disability: { type: Boolean, required: true },
  bloodGroup: { type: String, required: true },
  identificationMark: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const AdmissionForm = mongoose.model('AdmissionForm', admissionFormSchema);

// export default AdmissionForm;
