import { model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
	email: string;
	password: string;
	comparePassword: (password?: Number) => Promise<Boolean>;
}

const userSchema = new Schema({
	email: {
		type: String,
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.pre<IUser>("save", function (next) {});

userSchema.methods.comparePassword = function (
	password: string
): Promise<Boolean> {
	return bcrypt.compare(password, this.password);
};
