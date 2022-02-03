//1.conversion
//feet to inch
/* function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const result = feetToInch(1);
console.log(result); */

//2.conversion
//centimetee to meter

/* function centimeterToMeter(centimeter){
    const meter = centimeter * 0.01;
    return meter;
}
const result = centimeterToMeter(100);
console.log(result); */

//3.calculations
/* function pageRequirement(book1Quantity,book2Quantity,book3Quantity){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;

    const totalPagesOfBook1 = book1Pages * book1Quantity;
    const totalPagesOfBook2 = book2Pages * book2Quantity;
    const totalPagesOfBook3 = book3Pages * book3Quantity;

    const totalPagesAllBooks = totalPagesOfBook1 + totalPagesOfBook2 + totalPagesOfBook3;
    return totalPagesAllBooks;

}
const getTotalPages = pageRequirement(1,2,1);
console.log(getTotalPages); */

//4 bestFriends
/* const friends = ['md','alamin','islam','alo'];

function bestFriends(names){
    let biggestFriend = friends[0];
    for(const friend of friends){
        if (friend.length > biggestFriend.length){
            biggestFriend = friend;
        }  
    }
    return biggestFriend;
}
const result = bestFriends(friends);
console.log(result); */

//5.only positive
//const numbers =[-1,4,5,6,-9,10,20];

/* function onlyPositive(num){
    const postiveNumber = [];
    for(const number of num){
        if(number>0){
            postiveNumber.push(number);
        }
    }
    return postiveNumber;
}
const result = onlyPositive(numbers);
console.log(result); */