import User from '../models/user';

export const showMessage = (req, res) => {
	res.status(200).send(req.params.message);
};

export const registerUser = async (req, res) => {
	console.log(req.body);
};
