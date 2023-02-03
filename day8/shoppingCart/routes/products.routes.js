var express = require("express");
const morgan = require("morgan");//module to be installed
const path = require("path");
// logging of the requests -- morgan
const fs = require("fs");
const prodController = require("../controllers/productController");




var router = express.Router();

// middleware specific to products route
router.use((request, response, next) => {
    console.log("Products routes middleware", request.rootDirName);// path to he root folder
    var wStream = fs.createWriteStream(path.join(request.rootDirName, "log", "serverLog.txt"), { flags: "a" });
    morgan("short", { stream: wStream })
    wStream.close();
    next();
})

//get request to /products
router.get("/", (request, response, next) => {
    var filePath = path.join(request.rootDirName, "public", "product.html")
    response.sendFile(filePath);
})

router.put("/", (request, response, next) => {

})

router.post("/addProduct", (request, response, next) => {
    var prodDetails = request.body;
    var result = prodController.addProduct(prodDetails.prodName, prodDetails.prodDesc);
    if (result) {
        response.status(200).send({ msg: "Product added successfully" });
    }
    else {
        response.status(403).send({ msg: "Could not add the product" });
    }
})

router.get("/products", (request, response, next) => {
    var result = prodController.getProducts();
    if (result) {
        response.status(200).send({ msg: "Product added successfully", data: result });
    }
    else {
        response.status(404).send({ msg: "Products not found" });
    }
})

router.delete("/", (request, response, next) => {

})

module.exports = router;



