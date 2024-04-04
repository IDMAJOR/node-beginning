const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://majorid237:07045641701Major@nodetuts.waunn1y.mongodb.net/task-manager?retryWrites=true&w=majority&appName=nodetuts'


const connectDb = (url) => {
   return mongoose.connect(connectionString)
}

module.exports = connectDb;