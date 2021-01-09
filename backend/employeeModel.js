const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    id: {
        type: String,
        required: true
    },    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('employee', employeeSchema);