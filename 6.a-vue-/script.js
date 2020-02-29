// first div here, used the v-for method to create a list of facts

var llamaFacts = new Vue({
  el: '#llamaFacts',
  data: {
    message: 'Llama Facts!',
    facts: [
      { text: 'One of the ways llamas communicate is by humming.' },
      { text: 'Llamas are smart. They can distinguish between the neighbor’s dog and a predatory coyote.' },
      { text: 'Llamas are very social and will ‘adopt’ a group of sheep or goats as their own herd.' },
      { text: 'Llamas will protect the herd by chasing off coyotes and other predators.' }
    ]
  }
})

// second div here, used the v-model to let users interact
var yourLLamaFacts = new Vue({
  el: '#yourLLamaFacts',
  data: {
    fact: 'Add your llama fact here!',
    seen: true
  }
})

// third div here, regular way where i labeled the "expression" then gave it its value here (hope i am explaining correctly)
var moreFacts = new Vue({
  el: '#moreFacts',
  data: {
    growth: 'Llamas can grow as much as 6 feet tall though the average llama between 5 feet 6 inches and 5 feet 9 inches tall.',
    combat: 'Llamas don\'t bite. They spit when they\'re agitated, but that\'s mostly at each other.',
    diet: 'Llamas are vegetarians and have very efficient digestive systems.'
  }
});
