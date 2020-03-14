var vm = new Vue({
  el: '#app',
  data: {
    newMovieObj: {
      name: '',
      theater: '',
      date: null,
      duration: '',
      description: ''
    },
    movies: [
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
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. This path brings him face-to-face with his alter-ego: the Joker.'
      },
      {
        name: 'Booksmart',
        theater: 'St. Anthony Main Theater',
        date: '03/15/19',
        duration: '1h 42min',
        description: 'On the eve of their high school graduation, two academic superstars realize they should have worked less and played more. The girls try to cram four years of fun into one night.'
      },
      {
        name: 'Parasite',
        theater: 'Grandview Theatre',
        date: '12/02/19',
        duration: '2h 12min',
        description: 'A poor family con their way into becoming the servants of a rich family. But their easy life gets complicated when their deception is threatened with exposure.'
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
      color: '#633a82',
      fontSize: '16px'
    },
    headStyle: {
      background: '#71c9ce',
      color: 'white'
    },
    movieSize: 1.1,
    movieWeight: 'bold',

    descriptionStyle: {
      color: '#413c69',
      fontSize: '15px'
    }
  },
  methods: {
    submitHandler: () => {
      console.log('submitted');
      vm.movies = vm.movies.concat(vm.newMovieObj);
      vm.resetForm();
    },
    resetForm: () => {
      vm.newMovieObj = {
        name: '',
        theater: '',
        date: null,
        duration: '',
        description: ''
      };
    },
    deleteItem: item => {
      vm.movies = vm.movies.filter(movie => {
        return movie !== item;
      });
    }

  }
});
