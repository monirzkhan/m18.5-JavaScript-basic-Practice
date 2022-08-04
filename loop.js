//////আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। ////

for (i = 0; i < 39; i++){
    console.log('আসকে আমার মন ভালো নেই ')
}

var i = 0;
while (i < 39) {
    console.log(' আমার মন ভালো নেই ')
    i++;
}

////একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও ////

for (i = 58; i <= 98; i++){
    console.log(i);
}



//////একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  /////
for (i = 412; i <= 456; i += 2){
    console.log(i);
}

////একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও ////

i = 581;
while (i <= 623) {
    console.log(i);
    i += 2;
}

/////তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। ///

var skills = ['HTML', 'CSS', 'Bootstrap', 'Tailwind-basic', 'Java Script-Basic', 'Variable', 'Array', 'Loop']

for (i = 0; i < skills.length; i++){
    var skill = skills[i];
    console.log(skill);
}


////তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও ///

var usedPhone = ['Huwai', 'nokia', 'philips', 'sony', 'htc', 'I-phone 6']

i = 0;

while (i < usedPhone.length) {
    var phone = usedPhone[i];
    console.log(phone);
    i++;
}

/////একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও ///

for (i = 30; i < 86; i++){
    console.log(i);
    if (i >= 44) {
        break;
    }
   
}

/////তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

var booksPrices = ['50', '60', '100', '120', '150', '200', '180', '220', '300', '400', '500']
for (i = 0; i < booksPrices.length; i++ ){
    var bookPrice = booksPrices[i];
    
    if (bookPrice > 200) {
        continue;
    }
    console.log(bookPrice);
}
  