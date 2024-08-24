const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const { redisClient } = require('./config/redisConfig');
const apiRouter = require('./routes/index');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log("Mongo DB Connected");

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}); 

redisClient.on('connect', ()=>{
    console.log('Connected to redis');
})