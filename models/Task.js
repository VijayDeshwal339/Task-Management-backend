const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: { type: Number, default: 0 }, 
  category: String,
});


module.exports = mongoose.model('Task', taskSchema);


