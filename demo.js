


/* const namesString = 'Betty, Bob, Sue';
console.log(namesString);
const myArrayFromString = namesString.split(',');
console.log(myArrayFromString); */


/*let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[4 - 2]);
// → 5
*/

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
sequence.push(6);
sequence.push(7);
console.log(sequence);
sequence.pop();
sequence.pop();
console.log(sequence);

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.events);
  // → false

  let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
  };
  console.log(descriptions.work);

  //

  let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
console.log(anObject.right);
// → 2
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA ={a: 1, b: 2};
console.log(objectA);
Object.assign(objectA, {b: 3, c: 4, d: 5});
console.log(objectA);




// const myMovies = [];
// console.log(myMovies);
// const mySongs = ['happy birthday song','twinkle twinkle', 'popcorn'];
// console.log(mySongs);
// const myNumbers =[1, 2, 3, 4, 5];
// console.log(myNumbers);
// const myMix = ['casablanca', 1, true];
// console.log(myMix);

// // viewing values by index
// console.log(mySongs[2]);

// //get length
// mySongs.push('cant stop loving you');
// console.log(mySongs[mysongs.length - 1]);

// // push
// myNumbers.push(13);
// console.log(myNumbers);

// /*//pop popping off the last two items
// mySongs.pop();
// mySongs.pop();
// console.log(mySongs[mysongs.length - 1]);
// /*/

// // shift
// mySongs.shift();
// console.log(mySongs[0]);

// // unshift insert a song to the first one of the songs
// mySongs.unshift('celebrate');
// console.log(mySongs);

// //splice (removing songs from the middle)
// mySongs.splice(3, 2);
// console.log(mySongs);
// myNumbers.splice(3, 0, 67);
// console.log(myNumbers);

// //indexOf
// const hbsIndex = mySongs.indexOf('happy birthday song');
// mySongs.splice(hbsIndex, 1);
// console.log(mySongs);

// // concat
// const myNewArray = mySongs.concat(myNumbers);
// const myNewNewArray = myNewArray.concat('hi from space');
// console.log(myNewNewArray);

// //join
// console.log(MyNewNewArray.join('|'));











/* const myTopMovies = {
    adventure: 'Raiders of the Lost Ark',
    romance: 'Romancing the Stone',
    comedy: 'Time Bandits',
    foreign: {
        japanese: 'Millenial Actress'
    }
};


console.log(myTopMovies);
myTopMovies.drama ='kramer vs kramer';
 */
/*
console.log(myTopMovies.foreign.Japanese);

const myQuiz = [
    {question: 'color from mixing red n blue', answer: 'purple'},
    {question: 'adding white to a color is', answer: 'tinting'}];

const firstQuestion  = prompt(myQuiz[0].question);
const firstAnswer = myQuiz[0].answer
if(firstQuestion === firstAnswer) {
    alert('that is right');
} else {
    alert('nope');
}
*/


/* 
var obj = {
	a: "hello world",
	b: 42,
	c: true
};
//console.log(obj["a"]); OR
console.log(obj.a); */