import express from 'express';
import mongoose  from 'mongoose';


const app = express();
const PORT = 3002;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://bash_dev:wilco1990@ds247223.mlab.com:47223/learning-db');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));