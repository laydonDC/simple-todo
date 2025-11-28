const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

//App config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URI;

//Middleware

//Convert to json
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connectionURL)
    .then(() => {
        app.listen(port, () => console.log(`Server running on port: ${port}`));
    })
    .catch((error) => console.log(error));

//API Endpoints (CRUD)





