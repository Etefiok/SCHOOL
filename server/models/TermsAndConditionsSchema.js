
import mongoose from "mongoose";

const termsAndConditionsSchema = new mongoose.Schema({
  content: String,
  updatedAt: { type: Date, default: Date.now },
});

const TermsAndConditions = mongoose.model('TermsAndConditions', termsAndConditionsSchema);

export { TermsAndConditions };
