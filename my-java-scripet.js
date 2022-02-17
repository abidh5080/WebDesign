var alurDam=10;
console.log(alurDam);

var name="Abid Hasan";
console.log(name);

var AbidNewWebDevoloper=true;
var AbidWebDevoloper=false;
console.log(AbidNewWebDevoloper);
console.log(AbidWebDevoloper);
var UserName="Md Abid Hasan"
console.log(UserName);
var mySelf='I am Muslim';
console.log(mySelf.indexOf('l'));

var number='300.313';
var number1=13;
number = parseInt (number)
console.log(number + number1);

var prise = 7;
var prise2 = 500;
var total = prise / prise2;
console.log(total);

var number = -5.87657;
var absulit = Math.abs(number);
absulit = parseInt(absulit)
console.log( absulit);

var malaysia = 799999;

if(malaysia < 800000){
    console.log("ami jabo");
}
else{
console.log('ami jabo na');
}
var akTaka = 1;

console.log(malaysia + akTaka);

var biya = true;

var taka = 5000;

if (biya == true && taka < 3000){
    console.log('ami akhon biye korte pari');
}
else if(biya == true){
    console.log('ami parbo');
}
else{
    console.log('amake opekha korte hobe');
}

var frindsName = ['abid','akbor','khokon','rasel'];
var ami = frindsName.slice(2,4);
console.log(ami);

var number = 0;
while (number<=3){
    console.log(number);
    number++;
}
var number = 10;
    switch (number) {
        case 10:
        console.log('okay');
            break;
    
        default:
            console.log('i dont know who are you');
            break;
    }

function duble(number) {
    var result =number*2;
    return result;
}
var first = duble(2);
var second = duble(50);
var total = first+second;
console.log(total);

function add(num1, num2) {
    var addTotal = num1 + num2;
    return addTotal;
}
var addResult = add(10, 20)
console.log(addResult);

function inch(firstNum) {
    var devite = firstNum / 12;
    return devite;
}
    var resultDevite = inch(60);
    console.log(resultDevite);

    const myBirth = 24;
    let abid = myBirth / 8;
    console.log(abid);
   
  function factorial(n) {
      var factorials = 1;
    for (let i = 1; i <= n; i++) {
        factorials = factorials*i;
    }
    return factorials;
  }
  var ami = factorial(10);
  console.log(ami);

function factori(n){
    var i = 1;
    var factori = 1;
  while(i<=n){
      factori= factori*i;
      i++;
  }
  return factori;
}
 var result = factori(5);
 console.log(result);

 
 
var elements = [1, 3, 5, 7, 11, 13, 17];
var sum = 0;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        sum = sum + element;
        
    }
 console.log(sum);

var birani = [1, 3, 5, 4, 2, 6, 3, 6, 7 , 3, 4, 2, 7, 9]
var unicDegit = [];
for (let i = 0; i < birani.length; i++) {
    let element = birani[i];
    var index = unicDegit. indexOf(element);
    if(index == -1){
        unicDegit.push(element);
    
    }
    
}
console.log(unicDegit);

var count = "I   am a new web developer  ";
var counting = 0;
for (let i = 0; i < count.length; i++) {
    var element = count[i];
    if (element == " " && count[i-1] != " ") {
        counting++;
    }    
}
console.log(counting);
 
function feetToMile(feet) {
    var solve = feet/5280;
    return solve;
}
var result = feetToMile(5280);
console.log(result);

function woodCalculator(chair, table, bade) {
    var chairCubicM = chair*1;
    var tableCubicM = table*3; 
    var badeCubicM = bade*5;
    var total = chairCubicM*tableCubicM*badeCubicM;
    return total;
}
var result = woodCalculator(5, 1, 1);
    console.log(result);

    function hotelCost(days) {
    if (days < 0) {
            return null;
        }
    if (days <= 10) {
        return days * 100;
    }
    else if (days <= 20) {
        return 10 * 100 + (days - 10) * 80;
    }
    else {
        return 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
}
console.log(hotelCost(-5))

function bricksCalculator(n) {
    if (n < 0) {
        return null;
    }
    if (n <= 10){
       return n*15000;
    }
    else if (n <= 20) {
       return n*15000+(n-10)*12000;
    }
    else{
       return 10*1000+10*1100+(n-20)*10000;
    }
 }
 console.log(bricksCalculator(10));






    