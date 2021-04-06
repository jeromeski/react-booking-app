import User from '../models/user';


export const registerUser = async (req, res) => {
	console.log(req.body);
	const { name, email, password } = req.body;
	// validation
	if (!name) return res.status(400).send('Name is required');
	if (!password || password.length < 6)
		return res
    .status(400)
    .send('Password is required and should be min 6 characters');

  let userExist = await User.findOne({ email }).exec();
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

	/*
	User.findOne({ email }, (err, result) => {
		if (err) {
			res.status(400).send('Error, Registration failed');
		} else {
			res.status(400).send('Email is Taken');
		}
	});
  */
};
