const Task = require("../models/TaskSchema");
const { error, success } = require("../utils/responseWrapper.js");

const getTaskController = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.send(success(201, tasks));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};
const postTaskController = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTask = await Task.create({
      title,
      description,
      dueDate,
    });
    await newTask.save();
    res.send(success(201, newTask));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

const deleteTaskController = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    await task.deleteOne();
    res.send(success(201, "Task deleted successfully"));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

module.exports = {
  getTaskController,
  postTaskController,
  deleteTaskController,
};
