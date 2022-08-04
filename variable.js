//ভেরিয়েবল কি জিনিস?

//ans: Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on. Use the reserved keyword var to declare a variable in JavaScript.

//2) A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable. There are some rules while declaring a JavaScript variable (also known as identifiers). Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.


//. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে ?

// Ans. 5 things to write a variable in javascript.
//Example: declaration name equal(=) value semiclone(;)
var price = 10;

/////ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। /////
var price = 10;
// price = price + 10;
// price += 10; (add 10 to variable)
//price -=5; (minus 5 to variable)
//price *=5; (multiple 5 to variable)
//price /=5; (divide 5 to variable)

console.log(price);

/////কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি ??////
//Ans: Numeric, String, Boolean.

//////জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।/////

//Ans: Primitive Data Type: 1. Number, 2.String, 3.Boolean, 4.undefined 5. null.
// Non-Primitive data type: 1. object, 2. array, 3. function.

//////ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।////

//ans: number: var price=10; , string: var price='10'; , boolean: var isPriceCorrect= true; .
//ans: 1. can't use dash(-). 2. use snake case: example: user_name, 3. use camel case: example: useName; 4. use pascal case: example: UserName.
// variable always case sensitive. use small letter always.


/////শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। /////
var price = 10;
// price = price + 10;
// price += 10; (add 10 to variable)
//price -=5; (minus 5 to variable)
//price *=5; (multiple 5 to variable)
//price /=5; (divide 5 to variable)

console.log(price);

//////++ এবং -- এর কাজ কি ? এইটা কি জানো। ////
// ++ to add 1 from same variable value
// -- to deduct 1 from same variable value

/////parseInt, parseFloat, toFixed এইগুলা কি করে? /////
//parseInt: 
var numbers = '40';
number = parseInt(numbers);
console.log(number);


//to parseFloat and toFixed:
var price1 = 0.1;
var price2 = 0.2;
sum = price1 + price2;
sum = sum.toFixed(2);
sum = parseFloat (sum);
console.log(sum);
