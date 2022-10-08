import mongoose from 'mongoose';

const URI = "mongodb+srv://chourouk:azerty123@cluster0.gowfp7h.mongodb.net/pfett?retryWrites=false&w=majority"
const dbConnect = async (req, res, next) => {
    mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Successfully connected to database"))
    .catch((err) => {
        console.log("database connection failed. exiting now...");
        console.error(err);
        process.exit(1);
    })
}

export default dbConnect;