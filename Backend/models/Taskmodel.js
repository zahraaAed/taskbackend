
const { DataTypes } = require('sequelize');
const sequelize = require('./your-sequelize-instance'); // Replace with your actual Sequelize instance
export default Task = sequelize.define('Task', {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please add a title',
      },
    },
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please add a description',
      },
    },
  },
});


