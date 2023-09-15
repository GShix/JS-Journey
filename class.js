const Product=class{
    constructor(itemName,price, discount){
        this.itemName = itemName,
        this.price =price, 
        this.discount =discount
    }
}
let getProduct = new Product("Pencil",200,40)
console.log(getProduct)