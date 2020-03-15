const TaskModel = require("../Models/Task_model");

module.exports = {
  async index(request, response) {
    const tasks = await TaskModel.find();

    return response.json(tasks);
  },
  async store(request, response) {
    const { task, userName } = request.body;

    let newTask = await TaskModel.findOne({ task });

    if (!newTask) {
      newTask = await TaskModel.create({
        task,
        completed: 0,
        userCreated: userName,
        userDoing: ""
      });
    }

    return response.json(newTask);
  },
  async delete(request, response) {
    const { taskid } = request.params;

    // const task = TaskModel.deleteOne({ _id }, (err, resp) => {
    //   if (err) console.log(err);
    // });

    const task = await TaskModel.findOneAndDelete({ _id: taskid }, function(err) {
      if (err) console.log(err);
    });

    return response.status(200).send({ task, message: "task deletada" });
  },
  async update(request, response) {
    const { _id, userdoing, completed } = request.body;

    let task = await TaskModel.findById({ _id });

    if (task.userDoing) {
      task = await TaskModel.updateOne(
        { _id },
        { $set: { userDoing: "", completed: 0 } },
        (err, resp) => {
          if (err) console.log(err);
        }
      );
    } else {
      task = await TaskModel.updateOne(
        { _id },
        { $set: { userDoing: userdoing, completed } },
        (err, resp) => {
          if (err) console.log(err);
        }
      );
    }

    return response.json({ task });
  }
};
