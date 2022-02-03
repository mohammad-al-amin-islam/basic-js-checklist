//first checklist is to write a comment;

/* this is  
multiline 
comment */

//1.write 3 variables number,string,boolean;
/* let number = 1;
const string = 'al amin';
let boolean = true; */

//2. 2 variables using (let,const)
/* let num = 10;
num = 20;
//console.log(num);
//const number2 =20; */

/* number2 =30;
console.log(number2); */


//3. Simple Math Operations(+,-,*,/,%);
/* let num1 = 10;
let num2 = 20;


const addition = num1 + num2;
console.log(addition);
const subtraction = num2 - num1;
console.log(subtraction);
const multiplication = num1 * num2;
console.log(multiplication);
const quotient = 20 / 10;
console.log(quotient);
const remainder = 3 % 5;
console.log(remainder); */

//4.comparison()


/* let num1 = 10;
let num2 = 20;
 */
/* if (1 == 1) {
    console.log('Given number is equal');
}
if (20 > 10) {
    console.log('Given number is largest');
}
if (10 < 20) {
    console.log('Given number is smallest');
}
if(10!=20){
    console.log('given number is not equal');
}
if(num1<=num2){
    console.log('this number1 is less or equal');
}
if(num2>=num1){
    console.log('number2 is greater or equal');
} */

//with declaration

/* if (num1== num2) {
    console.log('Given number is equal');
}
if (num1 > num2) {
    console.log('Given number is largest');
}
if (num1 < num2) {
    console.log('Given number is smallest');
}
if(num1!=num2){
    console.log('given number is not equal');
}
if(num1<=num2){
    console.log('this number1 is less or equal');
}
if(num2>=num1){
    console.log('number2 is greater or equal');
}
 */
/* console.log(num2>=num1);
console.log(num1<=num2);
console.log(num1!=num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1== num2); */

//5.two conditions. case-1 fulfill both conditions.case-2: fulfill at leat one conditions.

//case 1
/* const num1 = 4;
if (num1 > 0 && num1 % 2 == 0) {
    console.log('this is not negative and even number');
}
else {
    console.log('this is negative and odd number');
} */

//case 2

/* if (num1 < 0 || num1 == 1000) {
    console.log('this is negative number');
}

else {
    console.log('this is not negative number');
} */

//6. if-else
/* let num1 = 10;
let num2 = 20;

if(num1>num2){
    console.log('number1 is bigger');

}
else{
    console.log('number1 is smaller');
} */

//7.while loop 7 to 19 display and then display odd number including 7 to 19;

/* let i = 7;
while(i<=19){
    console.log(i);
    i++;
}
 */
//odd number
/* let i = 7;
while(i<=19){
    if (i%2==1){
        console.log(i);
    }
    i++;
} */

//8.declare an array .number of element.update or change 4th position.add or remove elements. check whether a specifice value exist in value.

/* let array = [1,2,3,6,5,7,8];
console.log(array.length);
array[3]= 4;
console.log(array);
const addElement=array.push(9);
console.log(array);
const deleteElement = array.pop();
console.log(deleteElement);

const elementExistancse =array.indexOf(8);
console.log(elementExistancse); */

//9.use any for loop to display every elements of an array
//let array = [1, 2, 3, 6, 5, 7, 8];
/* for (let i = 0; i<array.length; i++) {
    console.log(array[i]);
}


for (const element of array) {
    console.log(element);
} */

//10.you have an array of numbers.display only number bigger than 80;
/* const numbers = [30,40,50,70,80,90,100,110];
for(const number of numbers){
    if (number>80){
        console.log(number);
    }
}
 */

//11. write a function that will take three numbers and return the multiplication of the three numbers.

/* function multiplication(num1,num2,num3){
    return num1 * num2 * num3;
}
const result = multiplication(2,3,4);
console.log(result); */

//12.declare an object and change an property of that object;

/* const mobile ={
    name:'poco m2',
    price:16500,
    ram:6
}
console.log(mobile);
const reducePrice = 'price'
mobile[reducePrice]=13600;
console.log(mobile); */