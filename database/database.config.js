// getting-started.js
require('dotenv').config()
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.CONNECT)
        .then(() => console.log('Connect database'))
        .catch((err) => console.log(err))
}
main();