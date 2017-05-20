const {SHA256} = require('crypto-js');
const jwt      = require('jsonwebtoken');
const bcrypt   = require('bcryptjs');

var password = "123abc!";

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });


var hashedPassword = "$2a$10$m/8vI4i9DRx.NXGQzm9Reu2vymCNzdtnvo0voMVLS69MldXUssk5m";

bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result);
});

// var data = {
//   id: 9
// }
//
// var token = jwt.sign(data, 'asdfgh')
// console.log(token);
//
// var decoded = jwt.verify(token, 'asdfgh');
// console.log(decoded);

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
