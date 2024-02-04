const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const standardSchema = new Schema({
    standardName: {
        type: String,
        default:null
    },
    educationYear: {
        type: String,
        default: null
    },
    couresId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'coures'
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const standard = mongoose.model('standard', standardSchema);


function validationStandard(req) {
    const Schema = Joi.object({
        standardName: Joi.string().required(),
        educationYear: Joi.string().required(),
        couresId : Joi.string().hex().length(24),
        isAvailable: Joi.boolean().default(true)
    });
    return Schema.validate(req);
}

exports.standard = standard;
exports.validationStandard = validationStandard;