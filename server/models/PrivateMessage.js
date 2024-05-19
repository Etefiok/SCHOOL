import mongoose from 'mongoose';

const privateMessageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

export default mongoose.model('PrivateMessage', privateMessageSchema);
