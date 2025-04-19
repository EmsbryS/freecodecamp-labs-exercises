const questions = [
    {
      category: "Science",
      question: "What planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Venus"],
      answer: "Mars"
    },
    {
      category: "History",
      question: "Who was the first president of the United States?",
      choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
      answer: "George Washington"
    },
    {
      category: "Geography",
      question: "Which is the largest ocean on Earth?",
      choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      category: "Math",
      question: "What is the square root of 64?",
      choices: ["6", "8", "10"],
      answer: "8"
    },
    {
      category: "Literature",
      question: "Who wrote 'Romeo and Juliet'?",
      choices: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
      answer: "William Shakespeare"
    }
  ];
  
  function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
  
  function getRandomComputerChoice(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
  
  function getResults(questions, computerChoice) {
    if (questions.answer === computerChoice) {
      return "The computer's choice is correct!"
    } 
    return `The computer's choice is wrong. The correct answer is: ${questions.answer}`
  }