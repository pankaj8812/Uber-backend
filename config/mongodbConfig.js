const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongo DB Connected");
    } catch (error) {
        console.log("Mongo DB Connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
