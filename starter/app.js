const express = require('express');
const app = express();
const tasks = require('./routes/task')
const connetDb = require('./database/connection');
require('dotenv').config();

// middlewares
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Task Runner');
    res.end();
})

app.use('/api/v1/tasks', tasks);

// app.get('api/v1/tasks')          -gets all the tasks
// app.post('api/v1/tasks')         -creates a new task
// app.get('api/v1/tasks/:id')      -gets a single task by id
// app.patch('api/v1/tasks/:id')    -edits or updates a task
// app.delete('api/v1/tasks/:id')   -deletes a task

const PORT = 3020;

const startConnection = async () => {
    try {
        await connetDb(process.env.MONGO_URI)
        console.log('Connected to the dataBase')
        app.listen(PORT, console.log(`listening on port ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
}

startConnection();
