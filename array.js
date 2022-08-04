///////Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয়
//ans: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. For example, const words = ['hello', 'world', 'welcome']; Here, words is an array.

//array declare: use third bracket, use single quotation in every word and comma after word. 
var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand']

/////array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে ?
totalItem = tableItems.length;
console.log(totalItem);

////array এর উপাদান গুলা এর পজিশন (index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।

//ans: array index start with 0.
//value change:
tableItems[2] = 'mobile';
console.log(tableItems);

////কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় ?
//ans: if want to see index no of value in the  array by indexOf but value does not exist then the show -1.
//example:
var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand']
console.log(tableItems[3]);
console.log(tableItems.indexOf('cable'))

////কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand']
element = tableItems[1];
console.log(element);

////কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand'];
tableItems[3] = 'watch';
console.log(tableItems);

/////একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

var tableItems = ['pen', 'notebook', 'laptop', 'mobile stand'];

console.log(tableItems.indexOf('notebook'));

//or
var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand'];
position = tableItems.indexOf('mobile stand');
console.log(position);

/////২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো).

//ans: when want to see index no of value of element by indexOf (), if put value name that not exist in the element then show 'undefined'.

////২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

//push==additin in last

var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand'];
tableItems.push('ring');
tableItems.push('shoe');
console.log(tableItems);

//pop==deduction in last.

var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand'];
tableItems.pop();

console.log(tableItems);

////কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
//unshit==additin in first

var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand'];
tableItems.unshift('iron');
tableItems.unshift('books');
console.log(tableItems);

//shift==deduction in first.

var tableItems = ['pen', 'nootebook', 'laptop', 'mobile stand'];
tableItems.shift();

console.log(tableItems);

/////তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

var myBudget = 15000;

if (myBudget > 80000) {
    console.log('i will buy MacBook');
}

else if (myBudget > 60000) {
    console.log('i will buy a Gaming Laptop');
}
else if (myBudget > 40000) {
    console.log('i will buy a Lenevo-Yoga');
}
else if (myBudget > 20000) {
    console.log('i will buy a used Laptop')
}

else {console.log(' i will use mobile to work')}








