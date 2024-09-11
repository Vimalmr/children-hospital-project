require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const db = require("./db");
const signupRoutes = require('./routes/signup');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const patientRoutes = require('./routes/patient');
const patientInfoRoutes = require('./routes/patientinfo');
const port = process.env.PORT || 5000;

// Middelwares
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/signup", signupRoutes);
app.use("/api/login", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/patiententry", patientRoutes);
app.use("/api/patientinfo", patientInfoRoutes);

app.listen(port, () => console.log('Server listening on port 8619'));