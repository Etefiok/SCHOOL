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

const Jss1MathsSession = mongoose.model('Jss1MathsSession', QuestionSchema);

export default Jss1MathsSession;