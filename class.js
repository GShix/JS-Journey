const Product=class{ // Class declaration using expression method
    constructor(itemName,price, discount){
        this.itemName = itemName,
        this.price =price, 
        this.discount =discount
    }
    // Method with no Parenthesis
    // get property
    get getprice(){
        return this.price;
    }
    // set new price
    set setprice(value){
        return this.price=value;
    }
    // function method (with parenthesis)
    RecentPrice(){
        return this.price;
    }
}
let Product1 = new Product("Pencil",200,40)
console.log(Product1);
//accessing pencil price
console.log(Product1.getprice);
//setting new price
console.log(Product1.setprice=500);
console.log(Product1.getprice);
/* Accessing price..
by function method */
console.log(Product1.RecentPrice())

/* Extending of class */
class Product2{
    constructor(ItemName){
        this.ItemName = ItemName;
    }
    get getItemName(){
        return this.ItemName + " is a Product2";
    }
}
class Furniture extends Product2{  // Extends the Parent Class
    constructor(ItemName){
        super(ItemName); // Super Function -> Call the constructor of the parent Class.
    }
    get getItemName(){
        return this.ItemName + " is a Furniture";
    }
}
let apple = new Product2 ('Apple');
let table = new Furniture("Table");
console.log(apple.getItemName);
console.log(table.getItemName);
