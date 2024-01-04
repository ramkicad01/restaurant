
    let a = parseInt(prompt("Enter Value A"));
    let b = parseInt(prompt("Enter Value B"));


function mathematics(){
 
    let c = a+b;
    console.log("The sum is "+c);

    let d = a-b;
    console.log("The difference is "+d);

    let p = a*b;
    console.log("The product is "+p);

    let q = a/b;
    console.log("the quotient is "+q);

    let m = a%b; 
    console.log("the modulus is "+m);

    let e = a**b;
    console.log("the exponent is "+e);
}

if (a>=100 && b>=100)
    mathematics();
else {
    alert("Please enter a 3 digit number");
}
 
const car = {brand:"KIA", model:"Seltos", color:"White"};
console.log(car);


/* mystr = prompt("Enter a String: ");

console.log(mystr.toUpperCase());

console.log(mystr.toLowerCase()); */


/* const str = new String ();
str();
 */