const User = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error('Unable to get all users:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error('Unable to get a user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const newUser = await User.create({ userName, password });
    if (newUser) {
      res.json(newUser);
    } else {
      res.status(404).json({ error: 'Internal Server Error' });
    }
  } catch (err) {
    console.error('Error in creating a user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params; 
  try {
    const deletedUser = await User.destroy({
      where: { id },
    });
    if (deletedUser) {
      res.json("The user was deleted");
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error('Error in deleting a user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUsers,
  getOneUser,
  addUser,
  deleteUser,
};
