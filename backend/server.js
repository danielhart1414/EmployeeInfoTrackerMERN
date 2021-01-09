const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

require('dotenv').config();
app.use(express.json());
const dbUri = process.env.ATLAS_URI;
mongoose.connect(dbUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connected!!");
});

const employeeRoutes = require('./employeeRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/employees', employeeRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});