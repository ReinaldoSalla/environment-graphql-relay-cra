import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  someID: String
});

const model = mongoose.model('users', User);

export default model;