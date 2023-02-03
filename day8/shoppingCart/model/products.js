class Product
{
    productName;
    productDesc;
    constructor(productName,productDesc)
    {
        this.productName=productName;
        this.productDesc=productDesc
    }

    setProduct(productName,productDesc)
    {
        this.productName=productName;
        this.productDesc=productDesc
    }
    getProduct(productName)
    {
        return this.productDesc;
    }

}
module.exports=Products;
