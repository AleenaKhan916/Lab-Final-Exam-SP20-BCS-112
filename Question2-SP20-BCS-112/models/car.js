const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  make: String,
  Type: String,
  Description: String,
});

const Car = mongoose.model("Todos", todosSchema);
module.exports = Car;
