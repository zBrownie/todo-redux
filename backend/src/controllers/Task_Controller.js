const TaskModel = require("../Models/Task_model");

module.exports = {
  async index(request, response) {
    const tasks = await TaskModel.find();

    return response.json(tasks);
  },
  async store(request, response) {
    const { task, userID } = request.body;

    let newTask = await TaskModel.findOne({ task });

    if (!newTask) {
      newTask = await TaskModel.create({
        task,
        completed: 0,
        userCreated: userID,
        userDoing: ""
      });
    }

    return response.json(newTask);
  },
  async delete(request, response) {
    const { id } = request.body;

    const task = await TaskModel.findOne({ id });
    await TaskModel.deleteOne(task);

    return response.status(200).send({ message: "task deletada" });
  }
};
