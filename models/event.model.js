const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const eventSchema = new Schema({
    title: {
        type: String,
        default: null
    },
    image: [{
        imagePath: String
    }],
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'institute'
    }
}, { timestamps: true });

const Event = mongoose.model('event', eventSchema);

function validationEvent(req) {
    const Schema = Joi.object({
        title:Joi.string().required(),
        instituteId:Joi.string().hex().length(24),
        image: Joi.array().items(Joi.string())
    });
    return Schema.validate(req);
}


exports.Event = Event;
exports.validationEvent = validationEvent;