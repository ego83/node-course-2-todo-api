var mongoose = require('mongoose');

// root
// pfuAkMY4wRt2

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://root:pfuAkMY4wRt2@ds133981.mlab.com:33981/node-todo-api');

module.exports = {mongoose};
