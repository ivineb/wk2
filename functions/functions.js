/* const makeNoise = function () {
    console.log('Pling!');
};

makeNoise();
// → Pling!


const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  
  console.log(power(2, 10));
  // → 1024

  //

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40


// multiple bindings having same name
const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(100));

console.log(n);

// nested scope

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };



  // Declaration notation

function square(x) {
  return x * x;
}

console.log('The future says:', future());

function future () {
  return "You'll never have flying cars";
} */

// Arrow functions

/*const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
*/

// these two definitions of square do the same thing

/* const square1 = (x) => { return x * x; };
const square2 = x => x * x;

// The call stack
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("bye"); */

// HERE//
/* // it ignores the other parameters here
function square(x) {return x * x; }
console.log(square(5, true, "hedgehog"));

// minus function
function minus (a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
// → -10 ( b is undefined here, so we get -a)

console.log(minus(10, 5));
// → 5 ( we have both a and b here, so we get a - b, so 10 -5 = 5)

//
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }
  
  console.log(power(4));
  // → 16  (since second argument is not provided, it defaults to two so 4 ^2 = 16)
  console.log(power(2, 6));
  // → 64 (since second arg us provided here, then 2^6 = 64)


  // local binding
  function wrapValue(n) {
    let local = n;
    return () => local;
  }
  
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  let wrap3 = wrapValue(3);
  console.log(wrap1());
  // → 1
  console.log(wrap2());
  // → 2
  console.log(wrap3());

  // functions that multiply by an arbitrary amount.
  function multiplier(factor) {
      return number => number * factor;
  }
  let twice = multiplier(2);
  
  console.log(twice(5));
  // => 5 x 2 = 10
  console.log(twice(10));
  // => 10 x 2 = 20
  console.log(twice(3));
  // => 3 x 2 = 6


/*   // i tried the thriple thingy here
function triple(factor) {
    return number => number * factor;
}

  let thrice = triple(3);
  console.log(thrice(5)); */ 


/* // Recursion
function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 3));
  // → 8
console.log(power(3, 4));
// base (3) *  power(3 x 3^3) = 3 x 27 = 81 */

////////////////////////////////////////////////////////

// kens video - functions:

function logOutGreeting(greeting) {
    console.log(greeting);
}
logOutGreeting('Salutations');

// function to get stuff
function getStuff (ingredient) {
    console.log('get ' + ingredient);
}

getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

// another way here
let makeSandwich = function (ingredientArray) {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log('get', ingredientArray[i]);
    }
};

makeSandwich = (ingredientArray) => {
    console.log(ingredientArray.toString(', '))
};


makeSandwich(['bread', 'mayo', 'tunafish']);

function makeRand (maxNumber) {
    const output = Math.ceil(Math.random() * maxNumber);
    return output;
}
function checkLegality (age) {
    return age>= 21;
}
//console.log(checkLegality(21));

//console.log(makeRand(100));

const EvesAge = 27;
if (checkLegality(EvesAge)) {
    console.log('She is legal');
}
const myObject = {
    x: 200,
    y: 400,
    getPosition: () => {
        this.x = 35;
        this.y = 45;
        console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
    }
}
myObject.getPosition();
console.log(myObject.x, myObject.y);