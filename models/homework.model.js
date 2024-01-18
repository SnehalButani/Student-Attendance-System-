const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require("joi");

const homeworkSchema = new Schema({
    standardId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'standard'
    },
    divisionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'division'
    },
    sendByFactulyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'staff'
    }
},{timestamps:true});

const homework = mongoose.model('homework',homeworkSchema);

function validationHomework(req) {
    const Schema = joi.object({
        standardId : joi.string().hex().length(24),
        divisionId : joi.string().hex().length(24),
        sendByFactulyId : joi.string().hex().length(24)
    });
    return  Schema.validate(req);
}

exports.homework = homework;
exports.validationHomework = validationHomework;