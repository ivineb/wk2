const myQuiz = [
    { question: 'color from mixing red and blue', answer: 'purple' },
    { question: 'adding white to a color is', answer: 'tinting' },
    { question: 'adding black to a color is', answer: 'shading' }
  ];

  // getting the index of the question
  // we can use Math.round(Math.random() * myQuiz.length -1) instead
  const randomQuestionIdx = myQuiz[Math.floor(Math.random() * myQuiz.length)];
  // storing the user's answer in a variable
  const yourAnswer = prompt(randomQuestionIdx.question);
  // alerting the response along with the correct answer
  alert("You answered " + yourAnswer + ". The correct answer was: " + randomQuestionIdx.answer);
  
