const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  vaccinationCenter: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  firstDoseCompleted: {
    type: Boolean,
    default: false,
  },
  secondDoseCompleted: {
    type: Boolean,
    default: false,
  },
  thirdDoseCompleted: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
});

module.exports = signUpTemplate;
