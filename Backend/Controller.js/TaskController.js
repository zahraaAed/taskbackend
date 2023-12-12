const Task = require('../models/Taskmodel');

const getTasks = async (req, res) => {
  try {
    const allTasks = await Task.findAll();
    res.status(200).json(allTasks);
  } catch (err) {
    console.error('Error in getting all tasks:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const oneTask = await Task.findByPk(id);
    if (oneTask) {
      console.log('Get one task:', oneTask);
      res.status(200).json(oneTask);
    } else {
      console.log('Task not found');
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    console.error('Error in getting one task:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = await Task.create({ title, description });
    console.log('Task added:', newTask);
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error in adding a task:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTaskCount = await Task.destroy({
      where: { id },
    });
    if (deletedTaskCount > 0) {
      console.log('Task deleted successfully');
      res.status(200).json({ message: 'Task deleted successfully' });
    } else {
      console.log('Task not found');
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    console.error('Error in deleting a task:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getTasks,
  getOneTask,
  addTask,
  deleteTask,
};
