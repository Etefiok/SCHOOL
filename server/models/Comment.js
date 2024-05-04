import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: String,
  Username: String,
  createdAt: { type: Date, default: Date.now },
});

export const Comment = mongoose.model('Comment', commentSchema);
