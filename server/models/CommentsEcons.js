import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: String,
  Username: String,
  createdAt: { type: Date, default: Date.now },
});

export const CommentsEcons = mongoose.model('CommentsEcons', commentSchema);
