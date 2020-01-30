const myMovies = ['Kill Bill', ' Inglourious Basterds', ' Pans Labyrinth', ' Her ', ' Sin City'];
console.log(myMovies);

const yourMovie = prompt('what is your favorite movie?');

myMovies.push(yourMovie);

console.log(myMovies.toString());

alert('our movies are: ' + myMovies);
