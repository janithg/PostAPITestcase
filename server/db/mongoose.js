var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:grand#123@ds133202.mlab.com:33202/todoapp');

module.exports = {mongoose};
