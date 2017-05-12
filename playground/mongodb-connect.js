// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mangoDB server');
  }
  console.log('connected to mongoDB server');

  // db.collection('Todos').insertOne({
  //   text: "somethign whatever",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  // db.collection('Users').insertOne({
  //   name: "Eugen",
  //   age: 33,
  //   location: "Köln"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("ohohoho error", err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 4));
  // });


  db.close();
});
