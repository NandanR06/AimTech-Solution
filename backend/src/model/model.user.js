import mogoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mogoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },

},{timestamps: true});

const USER  = mogoose.model('USER', userSchema);
export default USER;