// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mangoDB server');
  }
  console.log('connected to mongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5915b6ed22f8bd2c48e099fa")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch', err);
  // });

  // db.collection('Todos').find({}).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch', err);
  // });

  db.collection('Users').find({age: { $gt: 23 }}).toArray().then((docs) => {
    // console.log(`Todos count: ${count}`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch', err);
  });

  // db.close();
});
