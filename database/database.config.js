// getting-started.js
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/System')
        .then(() => console.log('Connect database'))
        .catch((err) => console.log(err))
}
main();