import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../index.js";
import nodemailer from "nodemailer";
import { Comment } from "../models/Comment.js";
import PrivateMessage from "../models/PrivateMessage.js";
import {EconomicsExam} from "../models/EconomicsExam.js";
import path from "path-browserify";
import { AdmissionForm } from '../models/AdmissionForm.js';
// import { AdmissionForm } from "../models/get_AdmissionFormSchema.js";
import { ContactUs } from "../models/contactUsSchema.js";
import { ApplicationForm } from "../models/applicationFormSchema.js";
import multer from "multer";
import { GeneralAlert } from "../models/GeneralAlertSchema.js";
import {TermsAndConditions} from "../models/TermsAndConditionsSchema.js"
import fs from 'fs';
// import privateMessagesRoute from './routes/privateMessages';
import  Jss1econssession  from "../models/EconomicsSessionSchema.js"; 
import { CommentsEcons } from "../models/CommentsEcons.js";
import Jss1MathsSession from "../models/MathsSessionSchema.js";



const router = express.Router();


// Middleware to parse JSON request bodies
router.use(express.json());



// API endpoint to retrieve user information
router.get("/welcomeuser", async (req, res) => {
  try {
    // Fetch the user from the database based on the request
    const user = await User.findOne({}, { Username: 1 });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    return res.status(200).json({
      status: true,      
      user: {
        message: `Welcome ${user.Username}!`,
        Username: user.Username,
        Firstname: user.Firstname,
        Lastname: user.Lastname,
        Email: user.Email,
        Phonenumber: user.Phonenumber,
      },
    });    
  } catch (error) {
    console.error("Error fetching user data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/comments', async (req, res) => {
  const { content, Username } = req.body;
  const newComment = new Comment({ content, Username });

  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/comments/count', async (req, res) => {
  try {
    const totalComments = await Comment.countDocuments();
    res.json({ totalComments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/commentsEcons', async (req, res) => {
  try {
    const commentsEcons = await CommentsEcons.find().sort({ createdAt: -1 });
    res.json(commentsEcons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/commentsEcons', async (req, res) => {
  const { content, Username } = req.body;
  const newComment = new CommentsEcons({ content, Username });

  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/commentsEcons/count', async (req, res) => {
  try {
    const totalCommentsEcons = await CommentsEcons.countDocuments();
    res.json({ totalCommentsEcons });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




router.post('/auth/comments/:commentId/replies', async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content, Username } = req.body;

    // Find the comment
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Create a new reply
    const reply = new Reply({
      content,
      Username,
      commentId: comment._id,
      userId: req.user.id, // Assuming you have authentication middleware to get the user's ID
      createdAt: new Date(),
    });
    await reply.save();

    // Update the comment with the new reply
    comment.replies.push(reply);
    await comment.save();

    // Return the new reply
    res.status(201).json(reply);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});







// Get private messages between two users
router.get('/:userId/:receiverId', async (req, res) => {
  try {
    const messages = await PrivateMessage.find({
      $or: [
        { senderId: req.params.userId, receiverId: req.params.receiverId },
        { senderId: req.params.receiverId, receiverId: req.params.userId },
      ],
    }).sort({ createdAt: 'asc' });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new private message
router.post('/', async (req, res) => {
  const { content, senderId, receiverId } = req.body;

  const newMessage = new PrivateMessage({
    content,
    senderId,
    receiverId,
    createdAt: new Date(),
  });

  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.post("/signup", async (req, res) => {
  const {
    Username,
    Firstname,
    Lastname,
    IDnumber,
    Phonenumber,
    Email,
    Password,
    Confirmpassword,
  } = req.body;

  const existingUser = await User.findOne({
    $or: [{ Username }, { IDnumber }, { Email }],
  });
  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  const hashPassword = await bcrypt.hash(Password, 10);

  const newUser = new User({
    Username,
    Firstname,
    Lastname,
    IDnumber,
    Phonenumber,
    Email,
    Password: hashPassword,
    Confirmpassword,
  });

  await newUser.save();
  return res.json({ message: "successfully signed up" });
});




router.post("/login", async (req, res) => {
  const { Username, IDnumber, Password } = req.body;

  // Validate required fields
  if (!Username || !IDnumber || !Password) {
    return res
      .status(400)
      .json({ message: "Please provide username, ID number, and password" });
  }

  try {
    const user = await User.findOne({ Username, IDnumber });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "Invalid username or ID number" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(Password, user.Password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Generate JWT token
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });

    // Return success response with user data and token
    return res.status(200).json({
        status: true,
        message: "Login successful",
        token: token,
        user: {
        Username: user.Username,
        Firstname: user.Firstname,
        Lastname: user.Lastname,
        Email: user.Email,
        Phonenumber: user.Phonenumber,
      },
    });
    
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


router.post("/login_Admin", async (req, res) => {
  const { Username, IDnumber, Password } = req.body;

  // Validate required fields
  if (!Username || !IDnumber || !Password) {
    return res
      .status(400)
      .json({ message: "Please provide username, ID number, and password" });
  }

  try {
    const user = await User.findOne({ Username, IDnumber });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "Invalid username or ID number" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(Password, user.Password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return success response with user data and token
    return res.status(200).json({
        status: true,
        message: "Login successful",
        token: token,
        user: {
        Username: user.Username,
        Firstname: user.Firstname,
        Lastname: user.Lastname,
        Email: user.Email,
        Phonenumber: user.Phonenumber,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ Email: email });
    if (!user) {
      return res.json({ message: "User not registered" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "diligentsamuel@gmail.com",
        pass: "onelove2",
      },
    });

    var mailOptions = {
      from: "diligentsamuel@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `http://localhost:27017/forgotPassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "Error sending email" });
      } else {
        return res.json({ status: true, message: "Email sent", token: token });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});



router.post('/Economics-exam', async (req, res) => {
  try {
    const { question, instructions, options, correctAnswer, image, answerType } = req.body;
    const newQuestion = new EconomicsExam({
      question,
      instructions,
      options: {
        A: options.A,
        B: options.B,
        C: options.C,
        D: options.D,
        E: options.E,
      },
      correctAnswer,
      image,
      answerType,
    });
    const savedQuestion = await newQuestion.save();
    res.status(200).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error saving question', error: error.message });
  }
});

// API endpoint to retrieve questions
router.get('/Economics-exam', async (req, res) => {
  try {
    const questions = await EconomicsExam.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving questions', error: error.message });
  }
});



const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const secret = process.env.JWT_SECRET;
    
    if (!token) {
      return res.status(400).json({ status: false, message: 'Token not provided' });
    }

    const decoded = jwt.verify(token, secret);
    console.log('Decoded user:', decoded);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ status: false, message: 'Invalid token' });
    } else {
      console.error('Error verifying token:', err);
      return res.status(500).json({ status: false, message: 'Internal server error' });
    }
  }
};



router.get('/verify', verifyUser, (req, res) => {
  // Check the requested page and respond accordingly
  const requestedPage = req.query.page;

  switch (requestedPage) {
    case 'LearnEnglish':
      return res.json({ status: true, message: 'Authorized', user: req.user, page: 'LearnEnglish' });

      //for Exams routes
    case 'LitInEnglish':
      return res.json({ status: true, message: 'Authorized', user: req.user, page: 'LitInEnglish' });
    case 'English':
      return res.json({ status: true, message: 'Authorized', user: req.user, page: 'English' });
    case 'Subjects_For_Exams':
    return res.json({ status: true, message: 'Authorized', user: req.user, page: 'Subjects_For_Exams' });
    
//for Homepage_Admin route
    case 'Homepage_Admin':
    return res.json({ status: true, message: 'Authorized', user: req.user, page: 'Homepage_Admin' });
      

//for Jss1session route
case 'Jss1session':
  return res.json({ status: true, message: 'Authorized', user: req.user, page: 'Jss1session' });
    


    default:
    return res.status(404).json({ status: false, message: 'Page not found' });
  }
  // return res.json({ status: true, message: 'Authorized', user: req.user });

});

router.get("/logout", (req, res) => {
  res.clearCookie("token")
  return res.json({status:true})
})


// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
  }),
});

// Route to handle the admission form submission
router.post('/admission-form', upload.fields([
  { name: 'passportImage', maxCount: 1 },
  { name: 'birthCertificate', maxCount: 1 }
]), async (req, res) => {

  try {
    const {
      surName,
      fullName,
      motherName,
      dob,
      residentialAddress,
      email,
      className,
      motherTongue,
      religion,
      placeOfBirth,
      city,
      district,
      state,
      lastSchoolAttended,
      admissionStandard,
      disability,
      bloodGroup,
      identificationMark,
      message
    } = req.body;

    const admissionForm = new AdmissionForm({
      surName,
      fullName,
      motherName,
      dob,
      residentialAddress,
      email,
      className,
      motherTongue,
      religion,
      placeOfBirth,
      city,
      district,
      state,
      lastSchoolAttended,
      admissionStandard,
      disability,
      bloodGroup,
      identificationMark,
      message,
      passportImage: req.files.passportImage ? req.files.passportImage[0].filename : null,
      birthCertificate: req.files.birthCertificate ? req.files.birthCertificate[0].filename : null
    });

    await admissionForm.save();
    res.status(201).json({ message: 'Admission form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting admission form' });
  }
});


// Route to get all admission form data
router.get('/admission-forms', async (req, res) => {
  try {
    const admissionForms = await AdmissionForm.find();
    res.json(admissionForms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// API endpoint to handle the contact form submission
router.post('/ContactUs', async (req, res) => {
  try {
    const { fullName, emailAddress, title, message } = req.body;

    // Create a new contact form data document
    const newContact = new ContactUs({ fullName, emailAddress, title, message });

    // Save the contact form data to the database
    await newContact.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Error submitting form' });
  }
});

router.get('/ContactUs', async (req, res) => {
  try {
    // Fetch all the contact form data from the database, sorted in descending order
    const contacts = await ContactUs.find().sort({ createdAt: -1 });

    if (!contacts || contacts.length === 0) {
      res.status(404).json({ error: 'No contact form data found' });
      return;
    }

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contact details:', error);
    res.status(500).json({ error: 'Error fetching contact details' });
  }
});





// Configure multer for file uploads
const applicationStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const applicationUpload = multer({ storage: applicationStorage });

// Application Form Route
router.post('/application-form', applicationUpload.single('resume'), async (req, res) => {
  try {
    const { fullName, emailAddress, position, message } = req.body;
    const resume = req.file?.filename;

    if (!fullName || !emailAddress || !position || !resume) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newApplication = new ApplicationForm({
      fullName,
      emailAddress,
      position,
      resume,
      message,
    });

    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ message: 'Error submitting application', error: error.message });
  }
});



router.get('/application-forms', async (req, res) => {
  try {
    const applicationForms = await ApplicationForm.find().sort({ createdAt: -1 });
    res.status(200).json(applicationForms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get application forms with pagination
router.get('/application-forms', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const totalForms = await ApplicationForm.countDocuments();
    const totalPages = Math.ceil(totalForms / limit);

    const applicationForms = await ApplicationForm.find().skip(skip).limit(limit);

    res.json({
      forms: applicationForms,
      totalForms,
      totalPages
    });
  } catch (error) {
    console.error('Error fetching application forms:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve static files from the uploads directory
router.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '../uploads', filename);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found' });
  }

  res.download(filePath, (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).json({ message: 'Error downloading file' });
    }
  });
});


// router.post('/general-alert', async (req, res) => {
//   try {
//     const { questions } = req.body;
//     const savedQuestions = await Promise.all(questions.map(async (question) => {
//       const newQuestion = new GeneralAlert(question);
//       return await newQuestion.save();
//     }));
//     res.status(201).json(savedQuestions);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// API endpoint to save questions
router.post('/general-alert', async (req, res) => {
  try {
    const { topic, title, content} = req.body;

    // Create a new general alert document
    const newQuestion = new GeneralAlert({ topic, title, content});

    // Save the general alert to the database
    const savedQuestion = await newQuestion.save();

    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// GET route to fetch all general alerts
router.get('/general-alerts', async (req, res) => {
  try {
    const generalAlerts = await GeneralAlert.find();
    res.status(200).json(generalAlerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Delete a general alert
router.delete('/general-alerts/:id', async (req, res) => {
  try {
    const alert = await GeneralAlert.findByIdAndDelete(req.params.id);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    res.json({ message: 'Alert deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Repost a general alert
router.post('/general-alerts/:id/repost', async (req, res) => {
  try {
    const alert = await GeneralAlert.findById(req.params.id);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }

    const newAlert = new GeneralAlert({
      topic: alert.topic,
      title: alert.title,
      content: alert.content,
      createdAt: new Date(),
    });

    await newAlert.save();
    res.json({ message: 'Alert reposted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a general alert
router.put('/general-alerts/:id', async (req, res) => {
  try {
    const alert = await GeneralAlert.findById(req.params.id);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }

    alert.topic = req.body.topic;
    alert.title = req.body.title;
    alert.content = req.body.content;
    await alert.save();

    res.json({ message: 'Alert updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// API endpoint to get the terms and conditions
router.get('/terms-and-conditions', async (req, res) => {
  try {
    const termsAndConditions = await TermsAndConditions.findOne({}, '-_id content updatedAt');
    res.json(termsAndConditions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching terms and conditions' });
  }
});

// API endpoint to save the terms and conditions
router.post('/terms-and-conditions', async (req, res) => {
  try {
    const { content } = req.body;
    const updatedAt = new Date().toLocaleString();
    const termsAndConditions = await TermsAndConditions.findOneAndUpdate(
      {},
      { content, updatedAt },
      { upsert: true, new: true }
    );
    res.json({ message: 'Terms and conditions saved successfully', updatedAt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving terms and conditions' });
  }
});



// POST endpoint to save questions
router.post('/jss1econssession', async (req, res) => {
  try {
    const questionsData = req.body; // Assuming req.body is an array of questions
    
    // Save each question to MongoDB
    const savedQuestions = await Jss1econssession.insertMany(questionsData);
    
    res.status(200).json(savedQuestions);
  } catch (err) {
    console.error('Error saving questions:', err);
    res.status(500).json({ error: 'Failed to save questions' });
  }
});





// // Multer setup for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// });

// const econs = multer({ storage: storage });

// // Route to handle file upload
// router.post('/jss1econssession', econs.single('file'), (req, res) => {
//   try {
//     // Construct the URL based on your server's setup
//     const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
//     // Save fileUrl to MongoDB or return it to frontend
//     res.json({ url: fileUrl });
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     res.status(500).json({ error: 'Failed to upload file' });
//   }
// });




// GET all jss1econssession posts
router.get('/jss1econssession', async (req, res) => {
  try {
    const posts = await Jss1econssession.find().sort({ updatedAt: -1 }); // Sort by updatedAt descending
    res.json(posts);
  } catch (error) {
    console.error('Error fetching jss1econssession posts:', error);
    res.status(500).json({ error: 'Failed to fetch jss1econssession posts' });
  }
});




// DELETE a session post by ID
router.delete('/jss1econssession/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedPost = await jss1econssession.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// POST endpoint to save questions
router.post('/jss1MathsSession', async (req, res) => {
  try {
    const questionsData = req.body; // Assuming req.body is an array of questions
    
    // Save each question to MongoDB
    const savedQuestions = await Jss1MathsSession.insertMany(questionsData);
    
    res.status(200).json(savedQuestions);
  } catch (err) {
    console.error('Error saving questions:', err);
    res.status(500).json({ error: 'Failed to save questions' });
  }
});


// API endpoint to fetch all jss1econssession posts
router.get('/jss1MathsSession', async (req, res) => {
  try {
    const jss1MathsSessionPosts = await Jss1MathsSession.find().sort({createdAt: +1})
    .exec();
    res.json(jss1MathsSessionPosts);
  } catch (error) {
    console.error('Error fetching jss1MathsSession posts:', error);
    res.status(500).json({ error: 'Failed to fetch jss1MathsSession posts' });
  }
});


// DELETE a session post by ID
router.delete('/jss1MathsSession/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedPost = await Jss1MathsSession.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



// API endpoint to fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, { Username: 1, Firstname: 1, Lastname: 1, Email: 1, Phonenumber: 1, Confirmpassword: 1 });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});


export { router as UserRouter };


