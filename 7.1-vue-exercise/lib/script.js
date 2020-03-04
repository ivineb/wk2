var vm = new Vue({
  el: '#llamaAlpaca',
  data: {
    // class binding
    isActive: true,
    hasError: false,
    llamaFacts: 'Llama Facts!',
    // facts about llamas using v-for
    llamas: [
      { text: 'One of the ways llamas communicate is by humming.' },
      { text: 'Llamas are smart. They can distinguish between the neighbor’s dog and a predatory coyote.' },
      { text: 'Llamas are very social and will ‘adopt’ a group of sheep or goats as their own herd.' },
      { text: 'Llamas will protect the herd by chasing off coyotes and other predators.' },
      { text: 'Llamas can grow as much as 6 feet tall.' },
      { text: 'Llamas don\'t bite. They spit when they\'re agitated, but that\'s mostly at each other.' },
      { text: 'Llamas are vegetarians and have very efficient digestive systems.' }
    ],

    // links using attribute bindings
    wikiLlama: 'https://en.wikipedia.org/wiki/Llama',
    bestLlama: 'Llamas are the best!',

    // alpaca section starts here
    alpacaFacts: 'Alpaca Facts!',
    // facts about alpacas using v-for
    alpacas: [
      { text: 'Alpacas are very smart animals, gentle, and easy to handle, each with its own personality.' },
      { text: 'Alpacas are shy, but very curious, quiet, and intelligent.' },
      { text: 'Alpacas have three-compartments in their stomach, which allow them to efficiently convert hay and grass to energy.' },
      { text: 'The alpaca can thrive without consuming very much water, although an abundant, fresh water supply is most necessary.' },
      { text: 'Alpacas’ feet are padded and leave the terrain undamaged as they graze, and do not pull the grasses up by the roots.' },
      { text: 'Alpacas have a life expectancy of about 20 years.' },
      { text: 'The alpaca is an herbivore, grazing on grass and munching weeds, shrubs and trees.' }
    ],
    // style bindings here
    styleObject: {
      backgroundColor: 'lavender',
      fontSize: '1.1em',
      padding: '1em',
      color: '#424874',
      width: '900px'
    },
    // this will override the other style, I used it for the llama section to change the bg color to light blue
    overRideStyleObject: {
      backgroundColor: 'lightblue'
    },
    // links using attribute bindings
    wikiAlpaca: 'https://en.wikipedia.org/wiki/Alpaca',
    bestAlpaca: 'Alpacas are the best!'
  }
})
