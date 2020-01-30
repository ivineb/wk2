// create
const evesCar = {
    color: 'black',
    pistons: 4
};
console.log(evesCar);

// mutate: add data (properties)
evesCar.fuelInjection = true;
console.log(evesCar);
evesCar['4-wheel-drive'] = true;

// dispaly single item with dot
console.log('eves car is', evesCar.color);

// display single item with array notation
console.log('is it 4 wheel dig?', evesCar['4-wheel-drive']);

// using toString (works with arrays too)
console.log(evesCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());

// mutate: remove property
delete evesCar.pistons;
console.log('eves car without pistons', evesCar);

// merge two objects
const basicJuke = {
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'Nissan'
};
const newJuke = Object.assign({}, basicJuke, evesCar);
console.log('new juke', newJuke);

// objects in arrays
const cars = [
    { make: 'Nissan', model: 'Rogue', color: 'orange' },
    { make: 'Nissan', model: 'Altima', color: 'blue' },
    { make: 'Dodge', model: 'Viper', color: 'blue' },
    { make: 'VW', model: 'Beetle', color: 'pink' },
    { make: 'Chevy', model: 'Blazer', color: 'black' },
    { make: 'Dodge', model: 'Charger', color: 'green' }
];

console.log('index 0 of cars color', cars[0].color);
const randomIdx = Math.round(Math.random() * cars.length - 1);
console.log('My car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);
