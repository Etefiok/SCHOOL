import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    position: { type: String, required: true },
    resume: { type: Buffer, required: true },
    message: String
  });
  
  const ApplicationModel = mongoose.model('ApplicationForm', applicationSchema);
  
  export { ApplicationModel as ApplicationForm };
