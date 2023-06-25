const axios = require("axios");
require("dotenv").config();

const FITPAGE_URL = process.env.FITPAGE_URL;

async function getStockScans() {
    let scans = await axios.get(FITPAGE_URL);
    return scans;
}

module.exports = { getStockScans };
