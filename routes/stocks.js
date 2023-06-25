const express = require("express");
const stockController = require("../controllers/stocks.js");
const utils = require("../utils/utils.js");
const router = express.Router();



//GET all stock
router.get("/stock-scans", async (req, res, next) => {
    try {
        let stocks = await stockController.getStockScans();
        let response = utils.getSuccessResponse(stocks.data);
        res.status = 200;
        res.json(response);
    } catch (err) {
        console.log(err);
        let err_response = utils.getErrorResponse(500, err.message);
        res.status = 500;
        res.json(err_response);
    }
});

module.exports = router;
