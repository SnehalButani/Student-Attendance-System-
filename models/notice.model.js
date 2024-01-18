const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const noticeSchema = new Schema({
    standardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'standard'
    },
    sendByFactulyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'staff'
    }
}, { timestamps: true });

const notice = mongoose.model('notice', noticeSchema);


function validationNotice(req) {
    const Schema = Joi.object({
        standardId : Joi.string().hex().length(24),
        sendByFactulyId : Joi.string().hex().length(24)
    });
    return  Schema.validate(req);
}

exports.notice = notice;
exports.validationNotice = validationNotice;