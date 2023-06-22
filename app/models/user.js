import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
  },
  image: {
    type: String,
  },
  password:{
    type: String,
  },
  isFirstVisit: {
    type: Boolean,
    default: true,
  }
});

const User = models.User || model("User", UserSchema);

export default User;