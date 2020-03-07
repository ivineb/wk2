var vm = new Vue({
  el: '#app',
  data: {
    // myMovies array containing 5 different objects, each one with 5 properties
    myMovies: [
      {
        name: 'JoJo Rabbit',
        theater: 'Riverview Theater',
        date: '11/25/19',
        duration: '1h 48m',
        description: 'A young boy in Hitler\'s army finds out his mother is hiding a Jewish girl in their home.'
      },
      {
        name: 'Joker',
        theater: 'AMC Rosedale',
        date: '10/15/19',
        duration: '2h 2min',
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.'
      },
      {
        name: 'Booksmart',
        theater: 'St. Anthony Main Theater',
        date: '03/15/19',
        duration: '1h 42min',
        description: 'On the eve of their high school graduation, two academic superstars and best friends realize they should have worked less and played more. Determined not to fall short of their peers, the girls try to cram four years of fun into one night.'
      },
      {
        name: 'Parasite',
        theater: 'Grandview Theatre',
        date: '12/02/2019',
        duration: '2h 12min',
        description: 'A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.'
      },
      {
        name: 'Knives Out',
        theater: 'The Plaza Theater',
        date: '01/07/19',
        duration: '2h 11min',
        description: 'A detective investigates the death of a patriarch of an eccentric, combative family.'
      }
    ],
    // binding styles here
    tableStyle: {
      color: '#413c69',
      fontSize: '16px',
      width: '75%'
    },
    headStyle: {
      background: '#424874',
      color: 'white'
    },
    movieSize: 1.1,
    movieWeight: 'bold',

    descriptionStyle: {
      color: '#851d41',
      fontSize: '15px'
    }
  }
});
