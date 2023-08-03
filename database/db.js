const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://diogocas89:BNDS83dsc1949@todolist.ihde8uc.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
