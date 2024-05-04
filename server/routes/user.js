import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../index.js";
import nodemailer from "nodemailer";
import { Comment } from "../models/Comment.js";
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


// API endpoint to get the total number of registered users
// router.get('/count', async (req, res) => {
//   try {
//     const userCount = await Number_UserCount.countDocuments();
//     res.json({ count: userCount });
//   } catch (error) {
//     console.error('Error fetching user count:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

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




export { router as UserRouter };
