require('dotenv').config();

// console.log(process);
// console.log("---------------");
// console.log(process.env);

let port = process.env.PORT;

module.exports = {
    PORT: port
}