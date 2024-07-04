// import { AdmissionForm } from '../models/AdmissionForm.js';
import mongoose from 'mongoose';

const admissionFormSchema = new mongoose.Schema({
  surName: { type: String},
  fullName: { type: String},
  motherName: { type: String},
  dob: { type: String},
  residentialAddress: { type: String},
  email: { type: String},
  className: { type: String},
  motherTongue: { type: String},
  religion: { type: String},
  placeOfBirth: { type: String},
  city: { type: String},
  district: { type: String},
  state: { type: String},
  lastSchoolAttended: { type: String},
  admissionStandard: { type: String},
  disability: { type: Boolean},
  bloodGroup: { type: String},
  identificationMark: { type: String },
  message: { type: String},
  passportImage: { type: String },
  birthCertificate: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const AdmissionForm = mongoose.model('AdmissionForm', admissionFormSchema);

