const mongoose = require('mongoose');
const AssignmentSchema = mongoose.Schema({
    person: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    observations: {
        type: String,
    },
    status: {
        type: Boolean,
        required: true
    },
    assignmentStartDate: {
        type: Date,
        required:true
    },
    assignmentEndDate: {
        type: Date,
    },
    user:{
        type: String,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    }
})

const Assignment = mongoose.model('Assignment', AssignmentSchema);
module.exports = Assignment;