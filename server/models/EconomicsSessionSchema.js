import mongoose from "mongoose";
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  title: String,
  lecturer: String,
  topic: String,
  content: Object,
  video: String,
  video2: String,
  updatedAt: { type: Date, default: Date.now },
});

const Jss1econssession = mongoose.model('Jss1econssession', QuestionSchema);

export default Jss1econssession;