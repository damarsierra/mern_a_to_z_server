const mongoose = require('mongoose');
require('dotenv').config()
const db = process.env.DB_CONN;

//   "mongoURI": "mongodb://localhost:27017/booklist",

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...' + db);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
