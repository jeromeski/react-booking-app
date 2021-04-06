import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: 'Name is required'
		},
		name: {
			type: String,
			trim: true,
			required: 'Email is required',
			unique: true
		},
		password: {
			type: String,
			required: true,
			min: 6,
			max: 64
		},
		stripe_account_id: '',
		stripe_seller: {},
		stripeSession: {}
	},
	// second option
	{ timestamps: true }
);

/**
 * While saving user, we need to make sure the password is hashed, not plain password
 * hashing should be done only in 2 situations
 * 1. If it is the first time a user is being saved/created
 * 2. User have updated/modified the existing password
 * for handlin such requirements, we can use 'pre' middleware in our schema.
 * this middleware/function will run each time user is saved/created
 * and/ or password is modified/updated
 */

// this middleware runs everytime user is saved in the database. user.save()
userSchema.pre('save', function (next) {
	let user = this;
	// hash password only if user is changing the password or registering for the first time.
	//  make sure to use this otherwise each time user.save() is executed, password
	//  will get auto updated and you can't login with original password.

	if (user.isModified('password')) {
		return bcrypt.hash(user.password, 12, function (err, hash) {
			if (err) {
				console.log('BCRYPT HASH ERR ', err);
				return next(err);
			}
			user.password = hash;
			return next();
		});
	} else {
		return next();
	}
});
//                                             cb fn ↓
userSchema.methods.comparePassword = function (err, next) {
	//       frontend  ↓         db ↓                   results
	bcrypt.compare(password, this.password, function (err, match) {
		if (err) {
			console.log('Compare password err', err);
			return next(err, false);
		}
		console.log('Match password', match);
		return next(null, match);
	});
};

export default mongoose.model('User', userSchema);
