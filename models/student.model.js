const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');


let studentSchema = new Schema({
    studentName: { type: String, default: null },
    prementId: { type: Number, default: 0 , unique:true},
    phoneNumber: { type: Number, default: null },
    email: { type: String, default: null },
    address: { type: String, default: null },
    uniqueId: { type: String, default: null },
    enrollmentNo: { type: Number, default: null },
    grNo: { type: Number, default: null },
    rollNo: { type: Number, default: null },
    isAvailable: { type: Boolean, default: true },
    divisionId: { type: mongoose.Schema.Types.ObjectId, ref: "division" },
    standardId: { type: mongoose.Schema.Types.ObjectId, ref: "standard" }
}, { timestamps: true });


// Middleware to set prementId before saving
studentSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.prementId) {
        try {
            const lastDocument = await student.findOne({}, {}, { sort: { prementId: -1 } });
            doc.prementId = (lastDocument && lastDocument.prementId) ? lastDocument.prementId + 1 : 1;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

const student = mongoose.model("student", studentSchema);

function validationStudent(req){
   
    const Schema = Joi.object({
        studentName: Joi.string().required(),
        prementId: Joi.string().default(null),
        phoneNumber: Joi.number().required(),
        email: Joi.string().email().required(),
        address: Joi.string().required(),
        uniqueId: Joi.string().default(null),
        enrollmentNo: Joi.number().default(null),
        grNo: Joi.number().default(null),
        rollNo: Joi.number().default(null),
        isAvailable: Joi.boolean().default(true),
        divisionId: Joi.string(),
        standardId:Joi.string() // Assuming divisionId is a string
    });
    return Schema.validate(req);
}

exports.student = student;
exports.validationStudent = validationStudent;