
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // _id: ObjectId,
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    default:'user'
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  blocked: {
    type: Boolean,
    default:false,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
