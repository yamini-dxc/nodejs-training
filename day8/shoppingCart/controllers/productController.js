const Products = require("../model/products");
var product = require("../model/products");

var productArr = [

];

function addProduct(productName, productDesc) {
    productArr.push(new Product(productName, productDesc));
    return true;
}

function getProducts() {
    return productArr;
}

module.exports = { addProduct, getProducts }