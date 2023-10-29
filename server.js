const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

// ? connecting database
connectDb();

// ? app and port

const app = express();
const port = process.env.PORT || 5000;

// ? Adding middleware to our project

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);
// ? Add app listen method
app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
