const User = require('../models/user');
exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({
			status: 'success',
			results: users.length,
			message: users
		});
	} catch(err) {
		console.log(err)
	}
}
exports.createUser = async (req, res) => {
	try {
		console.log(req.body);
		const newUser = await User.create(req.body);
		res.status(201).json({
			status: 'success',
			newUser
		});
	} catch(err) {
		res.status(400).json({
			status: 'fail',
			message: err
		});
	}
}
