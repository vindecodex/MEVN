const mongoose = require('mongoose');

// Schema
// Also used for validation
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: [ true, 'Username is required' ]
	},
	password: {
		type: String,
		required: [ true, 'Password is required' ]
	},
	fullName: {
		type: String,
		required: [ true, 'Full Name is required' ]
	},
	gender: {
		type: String,
		required: [ true, 'Gender is required' ]
	},
	age: {
		type: Number,
		required: [ true, 'Age is required' ]
	}
});

// Created Model
// Model First Letter Must Be Capital
const User = mongoose.model('User', UserSchema);

module.exports = User;
