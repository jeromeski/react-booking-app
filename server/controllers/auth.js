import User from '../models/user';

export const showMessage = (req, res) => {
	res.status(200).send(req.params.message);
};

export const registerUser = async (req, res) => {
	console.log(req.body);
	const { name, email, password } = req.body;
	// validation
	if (!name) return res.status(400).send('Name is required');
	if (!password || password.length < 6)
		return res.status(400).send('Password is required and should be min 6 characters');
	let userExist = User.findOne({ email }).exec();
	// let userExist = await User.findOne({ email }).exec();
	if (userExist) return res.status(400).send('Email is taken');
	// register user
	const user = new User(req.body);
	try {
		await user.save();
		console.log('USER CREATED', user);
		return res.json({ ok: true });
	} catch (err) {
		console.log('CREATE USER FAILED ', err);
		return res.status(400).send('Error. Try Again');
	}
};
