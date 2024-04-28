const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Connected to MongoDB');
});

const Schema = mongoose.Schema;


const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Welcome to the backend app!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});