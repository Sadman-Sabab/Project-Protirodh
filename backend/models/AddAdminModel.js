const mongoose = require("mongoose");

const AddAdminTemplate = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    }
});

module.exports = AddAdminTemplate;
