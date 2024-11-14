const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

const urlRoutes = require('./routes/urlRoutes');
app.use(express.json());
app.use('/api', urlRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(process.env.PORT, () => console.log("Server started on http://localhost:3000"));
    })
    .catch((error) => console.error("MongoDB connection error:", error));

