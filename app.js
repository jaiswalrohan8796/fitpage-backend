const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");

//config
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();
const FITPAGE_URL = process.env.FITPAGE_URL;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/api/scans", async (req, res, next) => {
    try {
        let scans = await axios.get(FITPAGE_URL);
        let response = {
            success: true,
            message: "success",
            data: scans.data,
        };
        res.status = 200;
        res.json(response);
    } catch (err) {
        console.log(err);
        let err_response = {
            success: false,
            message: err.message,
            error_code: 500,
            data: {},
        };
        res.status = 500;
        res.json(err_response);
    }
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
