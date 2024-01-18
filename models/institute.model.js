const Joi = require('joi');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

function generateRandomNumber() {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
}

// Get the current date without the time part
const currentDate = new Date().toISOString().split('T')[0];
const modifiedDateString = currentDate.replace(/-/g, '');
// Generate a random 4-digit number
const randomFourDigitNumber = generateRandomNumber();

// Combine the current date and the random number
const result = modifiedDateString  + randomFourDigitNumber;

let instituteSchema = new Schema({
    instituteCode: {
        type: Number,
        default: result
    },
    instituteName: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    autocode: {
        type: Number,
        default:randomFourDigitNumber
    },
    deleteAt: {
        type: Date,
        default: null
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


const institute = mongoose.model("institute", instituteSchema);

function validationInstitute(req) {
    const Schema = Joi.object({
        instituteName: Joi.string().default(null),
        address: Joi.string().default(null)
    });
    return Schema.validate(req);
}

exports.institute = institute;
exports.validationInstitute = validationInstitute;