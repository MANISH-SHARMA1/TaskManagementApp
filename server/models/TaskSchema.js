const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  dueDate: String,
});

module.exports = mongoose.model("tasks", taskSchema);
