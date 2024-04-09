const express = require('express');
// const React = require('react');
const ReactDOMServer = require('react-dom/server');
const SignUp = require('./'); // Assuming your SignUp component is in a file called SignUp.js
// const path = require('path');
// const bcrypt = require('bcrypt');


const app = express();

app.get('/SignUp', (req, res) => {
  //Render the SignUp component to a string
  // const signUpComponent = ReactDOMServer.renderToString(React.createElement(SignUp));

  //Send the rendered component as a response
  res.send(`
    <html>
      <head>
        <title>Sign Up Page</title>
        <!-- Include any CSS or other dependencies here -->
      </head>
      <body>
      <h1>this is the signup page</h1>
        <script src="SignUp.js"></script> <!-- Include your client-side JS bundle here -->
      </body>
    </html>
  `);
});

const port = 5001;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`)
});

// const express = require('express');
// const app = express();
// const path = require('path');
// const bcrypt = require('bcrypt');

// Set the view engine to use EJS
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render("Login");
// });

// app.get('/SignUp', (req, res) => {
//   res.render("signup");
// });

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}...`)
// });


