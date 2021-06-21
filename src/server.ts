import express from 'express';
const app = express();

app.get('/', (req, res) => res.json('bem-vindo à API'));

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
