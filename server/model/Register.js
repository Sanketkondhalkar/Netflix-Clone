import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const Register = mongoose.model("Register", registerSchema);

export default Register;
