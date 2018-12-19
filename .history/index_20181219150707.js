import express from 'express';
import mongoose  from 'mongoose';


const app = express();
const PORT = 3002;


mongoose.connect('mongoDB');
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));