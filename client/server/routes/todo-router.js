const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo-control');

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);


module.exports = router;