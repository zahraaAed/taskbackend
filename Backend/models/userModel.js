
const { DataTypes } = require('sequelize');

export default User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: 'Choose another username',
    },
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6],
        msg: 'Password should be at least 6 characters',
      },
    },
  },
});


