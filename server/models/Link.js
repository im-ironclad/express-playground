const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  'url': String,
  'copy': String
});

module.exports = Link = mongoose.model('links', LinkSchema);