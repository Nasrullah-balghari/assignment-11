//Question-1
// function raisePower(){
//     var a = 2;
//     var b = 3;
//     var power = a ** b;
//     console.log(power)
// }
// raisePower()

// var a = 2;
// var b = 3;
// function raisePower(a,b){
//     var power = a ** b;
//     console.log(power);
// }
// raisePower(a,b);

// var a = +prompt("Enter the base value");
// var b = +prompt("Enter the raise value");
// function raisePower(a,b){
//     var power = a ** b;
//     console.log(power);
// }
// raisePower(a,b);

//Question-2
// var inputYear = +prompt("Enter the year");
// if(inputYear%4 ===0){
//     alert("Leap year")
// }else{
//     alert("Not a leap year")
// }

//Question-3
/*Area of the triangle
area = S(S − a)(S − b)(S − c) // these are the comment
where, S = ( a + b + c ) / 2*/
// var a = +prompt("Enter the side a");
// var b = +prompt("Enter the side b");
// var c = +prompt("Enter the side c");
// var S,area;
// function s(a,b,c){
//      S = (a+b+c)/2;
// }
// function Area(S){
//      area = (S)*(S -a)*(S - b)*(S - c);
// }
// s(a,b,c);
// Area(S);
// console.log("Area of the triangle "+area)

//Question-4
/*Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction.*/
// var firstSub = +prompt("Enter the 1st sub marks")
// var secondSub = +prompt("Enter the 2st sub marks")
// var thirdSub = +prompt("Enter the 3st sub marks")
// var average, per;
// function average(firstSub,secondSub,thirdSub){
//     average = (firstSub+secondSub+thirdSub)/300;
//     console.log("the average marks is "+average);

// }
// function per(average){
//     per = average * 100;
//     console.log("the percentage is "+per+"%")
// }
// function main(){
//     average(firstSub,secondSub,thirdSub);
//     per(average);
// }
// main();

//Question-5
// var str="a quick brwon fox fox jumps right over the lazy dog";
// var ui=prompt("Enter single character");
// var f=false;
// for(var i=0;i<str.length;i++){
//    if(str[i]===ui){
//       f=true;
//       alert("The Index No.is= " + i);
//       break;
//    }

// }
//    if(!f){

//       alert("U Entered wrong element");

//    }

//Question-6
/*-Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long.*/
// var sentence = prompt("Enter the sentence\n 'not more than 25 characters'");
// function novowel(sentence){
//     var novowel = sentence.replace(/[aeiou]/gi,'');
//     console.log(novowel);
//     // return novowel;
// }
// novowel(sentence)

// var sentence = prompt('Enter the sentence');
// var sentenceSplit = sentence.split("")
// for (var i =0; i< sentenceSplit.length; i++){
//     if(sentenceSplit[i]==="a"  || sentenceSplit[i]==="e" || sentenceSplit[i]==="i" || sentenceSplit[i]==="o" || sentenceSplit[i]==="u"){
//        sentenceSplit[i]='';
//     }
// }
// var joinSentence = sentenceSplit.join("")
// console.log(joinSentence)

//Question-7
// var str = "Pleases read this application and give me gratuity";
// var count = findOccurances(str);
// alert(count);
// function findOccurances(str){
//    var words = str.split(" ");
//    var count=0;
//    for(var i=0;i<words.length;i++){
//        for(var j=0; j<words[i].length; j++){
//            var char = words[i].slice(j,j+1).toLowerCase();
//            var nextChar = words[i].slice(j+1,j+2).toLowerCase();
//            switch(char){
//                case "a":
//                case "e":
//                case "i":
//                case "o":
//                case "u":
//                    switch(nextChar){
//                        case "a":
//                        case "e":
//                        case "i":
//                        case "o":
//                        case "u":
//                            count++;
//                    }
//            }
//        }

//    }
//    return count;
// }

//Question-8
/*The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters.*/
/*1km = 1000m
1m = 3.28084 F
1f = 12inches
1inches = 2.54cm*/
// var city = +prompt("Enter the distance between two cities\n (in km)");
// var km,m,feet,inches,cm
// function km(city){
//   km = city;
//   console.log("Kilometer "+km);
// }
// km(city)
// meter(city)
// feet(m);
// inches(feet);
// cm(inches);
// function meter(city){
//     m = 1000 * km;
//     console.log("meter "+m)
// }
// function feet(m){
//     feet = m * 3.28084;
//     console.log("feet "+feet);
// }
// function inches(feet){
//     inches = feet * 12;
//     console.log("inches "+inches);
// }
// function cm(inches){
//     cm = inches * 2.54;
//     console.log("centimeter "+cm);
// }

//Question-9
// var ui=+prompt("TELL THE TIME YOU WORKED");
// var uii=ui-40;
// uii*=12;
// alert("you'll get overtime pay=" + uii+ "Rs.");

//Question--10
var ui = prompt("TELL THE MONEY");
if (ui.length === 3) {
   a = ui[0];
   b = ui[1];
   c=0;
   console.log('you need ' + a + ' notes of 1 hundread ')
   
}
else {
   alert('you enterted less than 2 or more than 3 digits')

}
if (b == 0) {
   
   console.log('you do not need any other  note ')
   
}
else if (b >= 5) {
   c = b - 5;
   console.log('you need 1 note of fifty rupees and ' + c + ' notes of ten rupees')
}
else if (b < 50 && b>0) {
   console.log('you need ' + b + ' notes of ten rupees')

}


