const { response } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signUpTemplate = require("../models/SignUpModels");
const AddAdminTemplate = require("../models/AddAdminModel")
const User = new mongoose.model("User", signUpTemplate);
const NewAdmin = new mongoose.model("AdminCollection", AddAdminTemplate)
const checkLogin = require("../middlewares/checkLogin");
const { json } = require("body-parser");

router.post("/signup", async (request, response) => {

  try {
    const isAlreadyRegisteredUniqueId = await User.findOne({
      uniqueId: request.body.uniqueId,
    });
    const isAlreadyRegisteredEmail = await User.findOne({
      email: request.body.email
    });

    if (isAlreadyRegisteredUniqueId || isAlreadyRegisteredEmail) {
      response.status(500).json({
        message: "user already exists",
      });
    }
    else {
      const hashedPassword = await bcrypt.hash(request.body.password, 10);
      // console.log(req.body);

      const newUser = new User({
        uniqueId: request.body.uniqueId,
        day: request.body.day,
        month: request.body.month,
        year: request.body.year,
        name: request.body.name,
        mobileNumber: request.body.mobileNumber,
        email: request.body.email,
        password: hashedPassword,
        vaccinationCenter: request.body.vaccinationCenter,
      });
      await newUser.save();
      response.status(200).json({
        message: "Signup was successful",
      });
    }
  } catch {
    response.status(500).json({
      message: "Signup failed",
    });
  }



  /*  try {
     const hashedPassword = await bcrypt.hash(request.body.password, 10);
     // console.log(req.body);
 
     const newUser = new User({
       uniqueId: request.body.uniqueId,
       day: request.body.day,
       month: request.body.month,
       year: request.body.year,
       name: request.body.name,
       mobileNumber: request.body.mobileNumber,
       email: request.body.email,
       password: hashedPassword,
       vaccinationCenter: request.body.vaccinationCenter,
     });
     await newUser.save();
     response.status(200).json({
       message: "Signup was successful",
     });
   } catch {
     response.status(500).json({
       message: "Signup failed",
     });
   } */
});

router.post("/login", async (request, response) => {
  try {
    const user = await User.find({ email: request.body.email });

    if (!request.body.email || !request.body.password) {
      response.status(400).json({
        message: "please fill out the fields"
      })
    }

    //authentication
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        request.body.password,
        user[0].password
      );
      if (isValidPassword) {
        //generation token
        let token;
        token = jwt.sign(
          {
            uniqueId: user[0].uniqueId,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: process.env.EXPIRY_TIME,
          }
        );

        response.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.EXPIRY_TIME,
          httpOnly: true,

          secure: true,
        })

        //response.locals.LoggedInUser = user[0];

        response.status(200).json({
          access_token: token,
          message: "Login successful",
          userDataFromBackend: user[0]
        });

      } else {
        response.status(401).json({
          error: "Authentication failed1!",
        });
      }
    } else {
      response.status(401).json({
        error: "Authentication failed2!",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(401).json({
      error: "Authentication failed3!",
    });
  }
});

router.get("/listOfUsers", checkLogin, async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    console.error(err)
    res.status(401).send()
  }
})

router.get("/logout", (req, res) => {
  console.log(`Hello my logout page`)
  res.clearCookie(process.env.COOKIE_NAME)
  res.status(200).send("User Logout")
})


router.get("/cookieCheck", async (req, res) => {
  const token = req.cookies[process.env.COOKIE_NAME];
  let decoded = null;
  let user = null;
  if (!token) console.log("token is empty")
  else {
    console.log(`token is full. token = ${token}`)
    try {
      decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY)
      console.log(`printing decoded`)
      console.log(decoded)

      user = await User.findOne({ _id: decoded.userId });

      console.log("user = ")
      console.log(user)

    } catch (err) {
      console.log(err)
      res.status(401).send();
    }
  }

  if (token && user) {

    res.status(200).json({
      userDataFromBackend: user
    })
  }
  else res.status(401).send();
})


router.post("/addAdmin", async (req, res) => {

  console.log(req.body.email)

  try {
    const newUser = new NewAdmin({
      email: request.body.email,
    });
    await newUser.save();
    response.status(200).json({
      message: "Added as a admin",
    });
  }
  catch (err) {
    console.log(err)


  }

  // Sets `name` and unsets all other properties
})

// router.post("/isAdmin", async (req, res) => {
//   // console.log("isAdmin route is working till now")
//   // const email = req.body.email
//   // console.log(email)
//   // try {
//   //   const user = await NewAdmin.find({ email: email })
//   //   console.log(user);
//   //   if (user)
//   //     res.status(200).json({
//   //       dataSendFromBackend: user
//   //     })

//   //   else res.json(false)

//   // }
//   // catch (err) {
//   //   console.error(err)
//   //   res.json(false)
//   // }

//   const doc = await Person.findOne({ _id });

//   // Sets `name` and unsets all other properties
//   doc.overwrite({ name: 'Jean-Luc Picard' });
//   await doc.save();

// })
module.exports = router;
