const myArr = ['bob', 'betty', 'sue'];
const myOtherArray = new Array();
myOtherArray.push('star wars');
myOtherArray.push('raiders of the lost ark');
// myArr.pop(); // removes last item
// myArr.shift(); // removes first item
myArr.unshift('james'); // add item to the beginning of the array
console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); // read single item
console.log(myArr[1]);
console.log(myArr.indexOf('betty'));
const bettyIdx = myArr.indexOf('betty');
console.log(bettyIdx);

if (bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}

myArr.splice(bettyIdx, 0, 'robert');
console.log(myArr);
console.log(myArr.length);
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(myArr[randomNumber]);
