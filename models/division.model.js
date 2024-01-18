const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let divisionSchema = new Schema({
    standardId: {
        type: mongoose.Schema.Types.ObjectId,
        default: 'standard'
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
},{timestamps:true});


const division = mongoose.model("division",divisionSchema);

exports.division = division;