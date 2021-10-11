import fakeAnswers from './FakeQuizAnswers';

export const BuildQuiz = (item, wrongItem1, wrongItem2) =>{

  function generateRandom(min, max, no1) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === no1) ? generateRandom(min, max) : num;
  }

  function checkInfo(info) {
    const checkedInfo = [];
    info.map((ans) => {
      if(ans === "-" || ans === "null" || ans === "") checkedInfo.push("Unknown");
      else if(Array.isArray(ans) && ans[0] === "-") checkedInfo.push("Unknown");
      else checkedInfo.push(ans);
      return checkedInfo;
    });
    return checkedInfo;
  }

  function checkInfoW(info, correct, rndNum, wrong) {
    const checkedInfo = [];
    info.map((ans, index) => {
      if(ans === "-" || ans === "null" || ans === "" || ans === correct[index] || wrong[index]) {
        checkedInfo.push(fakeAnswers[index][rndNum]);
      }
      else if(Array.isArray(ans) && ans[0] === "-") checkedInfo.push(fakeAnswers[index][rndNum]);
      else checkedInfo.push(ans);
      return checkedInfo;
    });
    return checkedInfo;
  }

  // as one array in fakeAnswers needs to have reapeated values
  function doubleCheck(info, wrong, r1, r2) {
    const checkedInfo = [];
    const randNum =  generateRandom(0, 11, r1 || r2);
    info.map((ans, index) => {
      if(ans === wrong[index]) {
        checkedInfo.push(fakeAnswers[index][randNum]);
      }
      if(checkedInfo === wrong[index]) {
        const randNumm =  generateRandom(0, 11, randNum);
        checkedInfo.push(fakeAnswers[index][randNumm]);
      }
      else checkedInfo.push(ans);
      return checkedInfo;
    });
    return checkedInfo;
  }



  function generateAnswers(i) {
    const array = [
      i.biography["alter-egos"],
      i.connections.relatives,
      i.appearance["eye-color"],
      i.biography.alignment,
      i.appearance.race,
      i.biography["place-of-birth"],
      i.work.occupation,
      i.work.base,
      i.biography.aliases,
      i.biography.publisher,
      i.biography["full-name"],
    ];
    return array;
  }

  const rndNum1 =  generateRandom(0, 11, 0);
  const rndNum2 =  generateRandom(0, 11, rndNum1);

  const correctAnswers = checkInfo(generateAnswers(item));
  const wrongAnswers1 = checkInfoW(generateAnswers(wrongItem1),correctAnswers, rndNum1, correctAnswers);
  const wrongAnswers2 = doubleCheck(checkInfoW(generateAnswers(wrongItem2), correctAnswers, rndNum2, wrongAnswers1), wrongAnswers1, rndNum1, rndNum2);

  
   const QuizData = [
    {
      id: 0,
      question: "Who is/are " + item.name + "s alter ego?",
      options: [correctAnswers[0], wrongAnswers1[0], wrongAnswers2[0]],
      answer: correctAnswers[0]
    },
    {
      id: 1,
      question: "Who is/are " + item.name + "s relatives?",
      options: [wrongAnswers1[1], correctAnswers[1], wrongAnswers2[1]],
      answer: correctAnswers[1]
    },
    {
      id: 2,
      question: "What is " + item.name + "s eye color?",
      options: [wrongAnswers1[2], wrongAnswers2[2], correctAnswers[2]],
      answer: correctAnswers[2]
    },
    {
      id: 3,
      question: "What is " + item.name + "s alignment?",
      options: [wrongAnswers1[3], wrongAnswers2[3], correctAnswers[3]],
      answer: correctAnswers[3]
    },
    {
      id: 4,
      question: "What is " + item.name + "?",
      options: [wrongAnswers2[4], correctAnswers[4], wrongAnswers1[4]],
      answer: correctAnswers[4]
    },
    {
      id: 5,
      question: "Where was " + item.name + " born?",
      options: [correctAnswers[5], wrongAnswers1[5], wrongAnswers2[5]],
      answer: correctAnswers[5]
    },
    {
      id: 6,
      question: "What does " + item.name + " work with?",
      options: [correctAnswers[6], wrongAnswers1[6], wrongAnswers2[6]],
      answer: correctAnswers[6]
    },
    {
      id: 7,
      question: "Where does " + item.name + " work at?",
      options: [wrongAnswers2[7], correctAnswers[7], wrongAnswers1[7]],
      answer: correctAnswers[7]
    },
    {
      id: 8,
      question: "Who is/are " + item.name + "s alias/es?",
      options: [wrongAnswers2[8], wrongAnswers1[8], correctAnswers[8]],
      answer: correctAnswers[8]
    },
    {
      id: 9,
      question: "Who published " + item.name + "?",
      options: [correctAnswers[9], wrongAnswers1[9], wrongAnswers2[9]],
      answer: correctAnswers[9]
    },
    {
      id: 10,
      question: "Who plays the character of " + item.name + "? (Real name)",
      options: [wrongAnswers2[10], correctAnswers[10], wrongAnswers1[10]],
      answer: correctAnswers[10]
    }
  ];

 
for (var i = QuizData.length - 1; i > 0; i--) {
  // Generate random number  
  var j = Math.floor(Math.random() * (i + 1));             
  var temp = QuizData[i]; 
  QuizData[i] = QuizData[j]; 
  QuizData[j] = temp; 
}   

return QuizData.slice(0, 6); 
}

