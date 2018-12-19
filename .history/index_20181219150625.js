import express from 'express';
import mongoose  from 'mongoose';



mongoose.connect('');
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const app = express();
const PORT = 3002;

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));