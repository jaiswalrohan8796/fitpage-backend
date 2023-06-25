const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");

//route imports
const stockRoutes = require("./routes/stocks.js");

//config
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//stock routes
app.use("/api", stockRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

module.exports = { app };
