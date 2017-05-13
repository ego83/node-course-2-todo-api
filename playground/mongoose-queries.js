const {MongoClient, ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');

// var id = "59173ae263c054a431411b35";
var id = "5917137de3ec39443275c867";
// var id = "59173ae263c054a431411b35234345345";

// if (!ObjectId.isValid(id)) {
//   console.log('id not valid');
//   return console.log('id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


User.findById(id).then((user) => {
  if (!user) {
    return console.log('sorry, no user found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
