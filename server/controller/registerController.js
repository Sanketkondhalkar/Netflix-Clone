import Register from "../model/Register.js";

export const registerController = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email } = req.body;

    const verified = await Register.findOne({ email: email });

    if (verified) {
      return res
        .status(200)
        .json({ success: false, message: "User Already Exist" });
    }

    const register = await Register.create(req.body);

    return res.status(200).json({
      success: true,
      message: "You have successfully Registered",
      register,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

export const loginController = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email } = req.body;

    const verified = await Register.findOne({ email: email });

    if (!verified) {
      return res
        .status(200)
        .json({ success: false, message: "User Doesn't Exist bro" });
    }

    if (verified.password !== req.body.password) {
      return res.status(201).json({
        success: false,
        message: "Password is wrong",
      });
    }

    return res.status(200).json({
      success: true,
      message: "You have Successfully logged In",
      data: verified,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};
