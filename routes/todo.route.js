const Todo = require('../controllers/todo.Controller')
const express=require('express')
const todoRoute =express.Router()


todoRoute.post('/createTodo',Todo.createTodo)

module.exports = todoRoute