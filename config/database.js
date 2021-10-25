// config/database.js
// config/database.js
const dotenv = require("dotenv")
dotenv.config()
const dbName    = 'budgettracker'
module.exports = {
    'url' : `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagercluster.aqyy0.mongodb.net/${dbName}?retryWrites=true&w=majority`};
//mongodb+srv://Mary:<password>@taskmanagercluster.aqyy0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
