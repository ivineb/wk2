
// new instance of the vue class
// using example from vue guide to let users interact with a button I created in html to reverse h1
new Vue({
  el: '#myApp',
  data: {
    message: 'Hello World!',
    helloWorld: true
  },
  methods: {
      // reverse message here, by splitting the string, then reversing it, and then returning the array as a string (i think?)
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

// creating a to do list
new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  });