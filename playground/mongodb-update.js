// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mangoDB server');
  }
  console.log('connected to mongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5915c48ec0b8ff7205cb23f6")
  // }, {
  //   $set: {
  //     comleted: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5915c98ec0b8ff7205cb25d3')
  }, {
    $set: {
      name: "Master EGO"
    },
    $inc: {
      age: 5
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();
});
