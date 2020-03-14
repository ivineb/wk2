var vm = new Vue({
  el: '#app',
  data: {
    newMovieObj: {
      name: '',
      theater: '',
      date: null,
      duration: '',
      description: '',
      image: ''
    },
    movies: [
      {
        name: 'JoJo Rabbit',
        theater: 'Riverview Theater',
        date: '11/25/19',
        duration: '1h 48m',
        description: 'A young boy in Hitler\'s army finds out his mother is hiding a Jewish girl in their home.',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6855f99a-529e-474b-be73-aad11412f2a1/ddfoxi7-2d6d41c2-b091-4c45-8291-be690c78bf18.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4NTVmOTlhLTUyOWUtNDc0Yi1iZTczLWFhZDExNDEyZjJhMVwvZGRmb3hpNy0yZDZkNDFjMi1iMDkxLTRjNDUtODI5MS1iZTY5MGM3OGJmMTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.76N5hnJklzVPgOPxg-PyhOEmZ6iHiTHFEYEw9n2FqVI'
      },
      {
        name: 'Joker',
        theater: 'AMC Rosedale',
        date: '10/15/19',
        duration: '2h 2min',
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. This path brings him face-to-face with his alter-ego: the Joker.',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a504c732-2487-47cd-9380-d08f32a02454/ddj1h9j-53ec6162-a793-42d8-9d0f-73bd95d60137.png/v1/fill/w_256,h_256,strp/joker_folder_icon_by_dahlia069_ddj1h9j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvYTUwNGM3MzItMjQ4Ny00N2NkLTkzODAtZDA4ZjMyYTAyNDU0XC9kZGoxaDlqLTUzZWM2MTYyLWE3OTMtNDJkOC05ZDBmLTczYmQ5NWQ2MDEzNy5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.MZVvEIbLY6Djwq0whcGSktTzZ1hliLFuox2EBdMLlTs'
      },
      {
        name: 'Booksmart',
        theater: 'St. Anthony Main Theater',
        date: '03/15/19',
        duration: '1h 42min',
        description: 'On the eve of their high school graduation, two academic superstars realize they should have worked less and played more. The girls try to cram four years of fun into one night.',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c7268c79-9436-4230-b75e-2814495b25f4/dd9dyig-38efae42-a715-41cd-a227-6049de9a186a.png'
      },
      {
        name: 'Parasite',
        theater: 'Grandview Theatre',
        date: '12/02/19',
        duration: '2h 12min',
        description: 'A poor family con their way into becoming the servants of a rich family. But their easy life gets complicated when their deception is threatened with exposure.',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d608093-250f-4039-967f-ea8b3a36c56f/ddh5nmf-8592ad89-f076-441a-bbff-9755993befa4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVkNjA4MDkzLTI1MGYtNDAzOS05NjdmLWVhOGIzYTM2YzU2ZlwvZGRoNW5tZi04NTkyYWQ4OS1mMDc2LTQ0MWEtYmJmZi05NzU1OTkzYmVmYTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eC_S8xFTDnFKitpSCfpadMgxQIW45mjNrygXTe7Z6Ew'
      },
      {
        name: 'Knives Out',
        theater: 'The Plaza Theater',
        date: '01/07/19',
        duration: '2h 11min',
        description: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
        image: 'https://www.designbust.com/download/402/png/knives_out_new_icon512.png'
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
