import mongoose from 'mongoose';

const EconomicsExamSchema = new mongoose.Schema({
  question: { type: String, required: true },
  instructions: { type: String, required: true },
  options: {
    A: { type: String, required: true },
    B: { type: String, required: true },
    C: { type: String, required: true },
    D: { type: String, required: true },
    E: { type: String, required: true },
  },
  correctAnswer: { type: String, required: true },
  image: { type: String },
  answerType: { type: String, required: true },
});

const EconomicsExam = mongoose.model('EconomicsExam', EconomicsExamSchema);

export { EconomicsExam };
