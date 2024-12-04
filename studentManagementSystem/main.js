const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();

app.use(cors) ()

const port = process.env.APP_PORT || 3000;

app.use(bodyParser.json());


// COURSES ROUTES
const coursesRoutes = require("./routes/coursesRoutes");
app.use("/courses", coursesRoutes);


// STUDENTS ROUTES
const studentsRoutes = require("./routes/studentsRoutes");
app.use("/students",studentsRoutes );

// USERS ROUTES
const usersRoutes = require("./routes/usersRoutes");
app.use("/users", usersRoutes);

//AUTH ROUTES
const authRoutes = require("./routes/authRoutes");
app.use("/auth",authRoutes);


app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
});

// const userRoutes = require('./routes/usersRoutes');

