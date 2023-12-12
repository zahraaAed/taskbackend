const { getTasks, getOneTask, addTask, deleteTask } = require("../Controller.js/TaskController");
const router = require('express').Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getOneTask);
router.post('/tasks/addTask', addTask);
router.delete('/tasks/deleteTask/:id', deleteTask);

module.exports = router;
