const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

//App config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URI;

const { getTodos, createTodo, updateTodo, deleteTodo} = require("./controllers/todoController");

//Middleware

//Convert to json
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connectionURL)
    .then(() => {
        app.listen(port, () => console.log(`Server running on port: ${port}`));
    })
    .catch((error) => console.log(error));

//API Endpoints (CRUD)

// Get todos list
app.get('/todos', getTodos)

// Create todo
app.post('/todos', createTodo)

// Update todo by id    
app.put('/todos/:id', updateTodo)

// Delete todo by id
app.delete('/todos/:id', deleteTodo)




