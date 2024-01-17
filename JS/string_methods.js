let me = "  hello everyone!    ";

// remove the leading & trailing spaces
// trim return new string, string are immutable in js
// console.log("Original String: ", me);
// console.log("After Trimed:", me.trim());

// let pass = prompt("Set a password: ");
// console.log(pass.trim());     


let str = "hello everyone How ARE You";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// index of returns -1 if string/char not found
str = "I love coding!!";
console.log(str);
console.log("index of love: ", str.indexOf('love'));
console.log("index of love You: ", str.indexOf('love You'));   
console.log("index of o: ", str.indexOf('o'));   

// message chaining (applying one-by-one methods)
let msg = "           message chaining              ";
// let newMsg = msg.trim();
// console.log("After trim: ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("After uppercase: ", newMsg);

// combining above sentences
let newMsg = msg.trim().toUpperCase();
console.log("After uppercase & triming: ", newMsg);


// slice cur the particular part, ending index is exclusive
msg = "hello";
console.log(msg.slice(0, 4));
console.log(msg.slice(-2));    // convert -2 to str.length - 2 = 3


// replacing letters only *first occurence*
msg = "I love coding love love love";
console.log('after replacing love with do: ', msg.replace('love', 'do').replace('love', 'do'));

// repeating string
console.log(msg.repeat(2));

// split from given value also exclude that value from result, return type- object 
const value = "hi my name is sanket";
const words = value.split("a");
console.log("words in value: ", words);

console.log(parseFloat("23.98"));
console.log(parseInt("56adsd"));    
console.log(parseInt("ads56"));     // starting from non-integers