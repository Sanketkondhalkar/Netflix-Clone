import mongoose from "mongoose";

const connect = async () => {
  mongoose
    .connect(
      "mongodb+srv://sanket:sanket@cluster0.6rgsiyu.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((data) => console.log("database is connected"))
    .catch((error) => {
      console.log("error", data);
    });
};

export default connect;
