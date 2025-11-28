const mongoose = require('mongoose');
const Todos = require('../dbTodos');


// Get todos list
const getTodos = async (req, res) => {
    try {
        const allTodos = await Todos.find().sort({ createdAt: -1 });
        res.status(200).send(allTodos);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }

};

// Create todo
const createTodo = async (req, res) => {
    const dbTodo = req.body;

    try {
        const newTodo = await Todos.create(dbTodo);
        res.status(201).send(newTodo);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};

// Update todo by id
const updateTodo = async (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    console.log("updateTodo called in controller", id);

    try {
        // check if id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log("Invalid ID");
            return res.status(404).send(`No todo with id: ${id}`);
        }
        const todoID = {_id: id};
        const update = {completed: true};
        const updateTodo = await Todos.findOneAndUpdate(todoID, update);
        if(!updateTodo) {
            console.log("Invalid ID");
            return res.status(404).send(`No todo with id: ${id}`);
        }
        res.status(200).send(updateTodo);
    } catch (error) {
        console.log(error.message, "error in updateTodo");
        res.status(500).send({ message: error.message });
    }
};

// Delete todo by id 
const deleteTodo = async (req, res) => {
    const id = req.params.id;
    console.log("deleteTodo called in controller", id);

    try {
        // check if id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No todo with id: ${id}`);
        }
        const deleteTodo = await Todos.findOneAndDelete({_id: id});
        
        res.status(200).send(deleteTodo);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo 
};

