const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    collegeId: { type: String, unique: true, required: true },
    role: { type: String, enum: ['warden', 'student', 'admin'], required: true },
    collegeName: { type: String, required: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
    courseName: { type: String, required: true },
    hostelName: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
