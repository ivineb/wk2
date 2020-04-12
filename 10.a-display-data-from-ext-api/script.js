Vue.component('my-anime', {
  template: `
    <div v-bind:class="anime">
      <div class="anime-image">
        <img v-bind:src="anime.image_url" v-bind:alt="anime.title">
      </div>
      <div class="series-details">
        <h3>{{anime.title}}</h3>
        <p>Number of Episodes: {{anime.episodes}}</p>
        <p>Type: {{anime.type}}</p>
        <p>Rate: {{anime.rated}}</p>
        <p>Score: {{anime.score}}</p>
      </div>
    </div>
      `,
  props: ['anime']
});
const vm = new Vue({
  el: '#demoApp',
  data: {
    searchQuery: '',
    results: []
  },
  methods: {
    searchAnime: function () {
      axios
        .get('https://api.jikan.moe/v3/search/anime',
          { params: { q: vm.searchQuery } })
        .then(response => {
          vm.results = response.data.results;
        })
    }
  },
  mounted () {
    const query = {
      q: 'Naruto'
    }
    axios.get('https://api.jikan.moe/v3/search/anime',
      { params: query })
      .then(response => {
        console.log('response', response);
      });
  }

})
