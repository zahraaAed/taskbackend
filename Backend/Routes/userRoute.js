const { getUsers, getOneUser, addUser, deleteUser } = require("../Controller.js/UserController");
const router = require('express').Router();

router.get('/', getUsers);
router.get('/:id', getOneUser); 
router.post('/addUser', addUser);
router.delete('/deleteUser/:id', deleteUser); 

module.exports = router;
