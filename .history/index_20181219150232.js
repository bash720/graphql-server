import express from 'express';


const app = express();
const PORT = 3002;

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));