const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.json({ code: 200, status: "ok", message: "API Running" }))

// Define routes
app.use("/api/example", require("./routes/example.routes.js"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));