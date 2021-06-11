const mongoose = require("mongoose");

// Build profile schema
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    social: {
    youtube: {
            type: String
        },
    twitter: {
            type: String
        },
    facebook: {
            type: String
        },
    linkedin: {
        type: String
        },
    instagram: {
        type: String
        } 
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("profile", ProfileSchema);
