const { Router } = require("express");

const TaskController = require("./controllers/Task_Controller");
const UserController = require("./controllers/User_Controller");

const routes = Router();

routes.get("/", TaskController.index);
routes.post("/task", TaskController.store);
routes.delete('/task/:taskid',TaskController.delete);
routes.put('/task',TaskController.update);

routes.get("/user",UserController.index);
routes.post("/user",UserController.store);
routes.post("/auth",UserController.authetication);

module.exports = routes;
