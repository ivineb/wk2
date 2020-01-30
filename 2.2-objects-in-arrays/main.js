const favGames = [
    { name: 'Catan', type: 'board game', numberOfPlayers: '3 or 4', rating: '4.7 on Amazon', shortDescription: 'game designed for mainstream gamers to play with their friends and family, no matter the time and place.' },
    { name: 'Limbo', type: 'video game', numberOfPlayers: 'a single player ', rating: '9/10 on IGN', shortDescription: 'puzzle-platform video game.' },
    { name: 'Exploding Kittens', type: 'cards game', numberOfPlayers: '5 players ', rating: '4.7 on Amazon', shortDescription: 'perfect card game for adults, teens and kids who are into kittens and explosions and laser beams and sometimes goats.' }
];

console.log(favGames);

const userpick = prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

alert('you selected the game ' + favGames[userpick - 1].name + ' that is a ' + favGames[userpick - 1].type + ' with ' + favGames[userpick - 1].numberOfPlayers + 'with a rate of ' + favGames[userpick - 1].rating + ' and is a ' + favGames[userpick - 1].shortDescription);
