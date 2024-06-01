import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: String,
  topic: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const GeneralAlert = mongoose.model('GeneralAlert', questionSchema);

export { GeneralAlert };
