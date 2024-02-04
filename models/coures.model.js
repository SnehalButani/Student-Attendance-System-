const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const couresSchema = new Schema({
    couresName: {
        type: String,
        default:null
    },
    educationYear: {
        type: String,
        default: null
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const coures = mongoose.model('coures', couresSchema);


function validationCoures(req) {
    const Schema = Joi.object({
        couresName: Joi.string().required(),
        educationYear: Joi.string().required(),
        isAvailable: Joi.boolean().default(true)
    });
    return Schema.validate(req);
}

exports.coures = coures;
exports.validationCoures = validationCoures;