const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 9
}

var token = jwt.sign(data, 'asdfgh')
console.log(token);

var decoded = jwt.verify(token, 'asdfgh');
console.log(decoded);

// var message = 'i am user number 4';
// var hash = SHA256(message).toString();
//
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);
//
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
//
// token.data.id = 5;
// token.data.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('data was not change');
// } else {
//   console.log('data was changed. fuck!');
// }
