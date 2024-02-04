require('./database/database.config');
const express = require('express');
const app = express();

const student = require('./routes/student.routes');
const institute = require('./routes/institute.routes');
const staff = require('./routes/staff.routes');
const standard = require('./routes/standard.routes');
const division = require('./routes/division.routes');
const homework = require('./routes/homework.routes');
const event = require('./routes/event.routes');
const coures = require('./routes/coures.routes');

app.get('/', (req, res) => {
    res.send('Student Attendance System');
});

app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/student', student);
app.use('/institute', institute);
app.use('/staff', staff);
app.use('/standard', standard);
app.use('/division',division);
app.use('/homework',homework);
app.use('/event',event);
app.use('/coures',coures);

const port = 8000;
const hostname = '127.0.0.1'
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});