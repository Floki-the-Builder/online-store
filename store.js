// product name, price and qty
// save info in variables
let productName = prompt("Please enter product");
let price = Number(prompt("Price"));
let qty = Number(prompt("Quantity"));

// display in console: sub-total, final price
let subTotal = Number(qty * price);
let finalPrice = Number(price * .06 + subTotal);
let tax = .06;


// functions: price calculation, tax cal and display info
document.writeln(`
    <div>
        <p> Product: $ ${productName} </p>   
        <p> Subtotal: $ ${subTotal} </p>  
        <p> Tax: $ ${tax} </p>     
        <p> Final Price: $ ${finalPrice} </p>
    <div/>

`)

console.log(productName + " Subtotal: " + subTotal + "  Tax: " + tax + "  FinalPrice: " +  finalPrice);




// display results in HTML

