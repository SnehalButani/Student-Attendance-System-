const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const staffSchema = new Schema({
    name:{
        type:String,
        default:null
    },
    phoneNumber:{
        type:Number,
        default:null
    },
    email:{
        type:String,
        default:null
    },
    userType:{
        type:Number,
        default:null // 0 = user // 1 = admin
    },
    image:{
        type:String,
        default:null
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    institudeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'institute'
    }
},{timestamps:true});

const staff = mongoose.model('staff',staffSchema);

function validationStaff(req){
   
    const Schema = Joi.object({
        name: Joi.string().required(),
        phoneNumber: Joi.number().required(),
        email: Joi.string().email().required(),
        userType: Joi.number().default(0),
        image : Joi.string(),
        isAvailable: Joi.boolean().default(true),
        institudeId:Joi.string().hex().length(24)
    });
    return Schema.validate(req);
}

exports.staff = staff;
exports.validationStaff = validationStaff;