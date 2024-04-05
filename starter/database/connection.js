const mongoose = require('mongoose');

const dBconnect = (url) => {
    return mongoose.connect(url);
}

module.exports = dBconnect;