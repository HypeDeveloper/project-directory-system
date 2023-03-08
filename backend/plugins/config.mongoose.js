const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_SRV);
        console.log(`MongoDB Connected`);
    } catch (err) {
        console.log("goose")
        console.error(err);
    }
};

const connectDB_local = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_LOCAL);
        console.log(`MongoDB Connected Local`);
    } catch (err) {
        console.log("goose")
        console.error(err);
    }
};


function runDB(env) {
    if (env === "development") {
        connectDB_local();
    } else {
        connectDB();
    }
}

module.exports = { runDB };
