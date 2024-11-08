require("dotenv").config();

const mongoose = require("mongoose");

module.exports.ConnectDatabase = async () => {
  await mongoose.connect(
    `${process.env.MONGODB_URI}/${process.env.DATABASE}`,
    {
      retryWrites: true,
      retryReads: true,
    }
  );
};
