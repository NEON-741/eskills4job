require("dotenv").config();

const sequelize = require("sequelize");

const db = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }

);

db.authenticate().then(async()=>{
    await db.sync();
    console.log("DB connection successful")
})
.catch(()=>{
    console.log("DB connection failed");
});

module.exports= db;

