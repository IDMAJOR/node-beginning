// const express = require('express');
// const 

const getAllTask = (req, res) => {
    res.send('get all task');
}

const createTask = (req, res) => {
    res.json(req.body);
}
const getTask = (req, res) => {
    res.json({id:req.params.id});
}
const updateTask = (req, res) => {
    res.send('update task');
}
const deleteTask = (req, res) => {
    res.send('delete a task');
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}