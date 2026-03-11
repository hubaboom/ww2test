// quiz.js

const questions = [
    { question: "What event officially triggered the start of WWII in Europe?", answers: [{text: "Assassination of Archduke Franz Ferdinand", correct: false}, {text: "Germany's invasion of Poland", correct: true}, {text: "The bombing of Pearl Harbor", correct: false}, {text: "The Munich Agreement", correct: false}] },
    { question: "On what date did the Japanese attack Pearl Harbor?", answers: [{text: "December 7, 1941", correct: true}, {text: "September 1, 1939", correct: false}, {text: "June 6, 1944", correct: false}, {text: "August 6, 1945", correct: false}] },
    { question: "What was the name of the political party led by Adolf Hitler?", answers: [{text: "Bolshevik Party", correct: false}, {text: "Fascist Party", correct: false}, {text: "Nazi Party", correct: true}, {text: "Communist Party", correct: false}] },
    { question: "Who was the fascist dictator of Italy during WWII?", answers: [{text: "Joseph Stalin", correct: false}, {text: "Benito Mussolini", correct: true}, {text: "Francisco Franco", correct: false}, {text: "Hideki Tojo", correct: false}] },
    { question: "Which British Prime Minister is most associated with the policy of appeasement?", answers: [{text: "Winston Churchill", correct: false}, {text: "Neville Chamberlain", correct: true}, {text: "Clement Attlee", correct: false}, {text: "David Lloyd George", correct: false}] },
    { question: "What does the German military term 'Blitzkrieg' translate to?", answers: [{text: "Trench Warfare", correct: false}, {text: "Lightning War", correct: true}, {text: "Total Destruction", correct: false}, {text: "Armored Assault", correct: false}] },
    { question: "What was the code name for the Allied invasion of Normandy on June 6, 1944?", answers: [{text: "Operation Barbarossa", correct: false}, {text: "Operation Market Garden", correct: false}, {text: "Operation Overlord", correct: true}, {text: "Operation Torch", correct: false}] },
    { question: "Operation Barbarossa was the German invasion of which country?", answers: [{text: "France", correct: false}, {text: "Great Britain", correct: false}, {text: "The Soviet Union", correct: true}, {text: "Poland", correct: false}] },
    { question: "Which battle is widely considered the major turning point on the Eastern Front?", answers: [{text: "Battle of the Bulge", correct: false}, {text: "Battle of Stalingrad", correct: true}, {text: "Battle of Berlin", correct: false}, {text: "Battle of Kursk", correct: false}] },
    { question: "Which naval battle was the turning point in the Pacific Front?", answers: [{text: "Battle of Midway", correct: true}, {text: "Battle of the Coral Sea", correct: false}, {text: "Battle of Iwo Jima", correct: false}, {text: "Battle of Okinawa", correct: false}] },
    { question: "The Battle of El Alamein was a turning point on which front?", answers: [{text: "Western Front", correct: false}, {text: "Eastern Front", correct: false}, {text: "North African Front", correct: true}, {text: "Pacific Front", correct: false}] },
    { question: "On which Japanese city was the first atomic bomb dropped?", answers: [{text: "Tokyo", correct: false}, {text: "Kyoto", correct: false}, {text: "Nagasaki", correct: false}, {text: "Hiroshima", correct: true}] },
    { question: "Why did the League of Nations fail to stop aggression in the 1930s?", answers: [{text: "It had no military force to back up its decisions", correct: true}, {text: "It was controlled by Germany", correct: false}, {text: "It wanted a war to stimulate the economy", correct: false}, {text: "It was disbanded in 1935", correct: false}] },
    { question: "The Munich Agreement gave Germany control over the Sudetenland, which belonged to:", answers: [{text: "Austria", correct: false}, {text: "Poland", correct: false}, {text: "Czechoslovakia", correct: true}, {text: "France", correct: false}] },
    { question: "Which three nations made up the primary Axis Powers?", answers: [{text: "Germany, Italy, Japan", correct: true}, {text: "Germany, Soviet Union, Italy", correct: false}, {text: "Britain, France, USA", correct: false}, {text: "Japan, China, Germany", correct: false}] },
    { question: "Who were the 'Big Three' Allied leaders for most of the war?", answers: [{text: "Roosevelt, Churchill, Stalin", correct: true}, {text: "Truman, Attlee, Stalin", correct: false}, {text: "Churchill, De Gaulle, Roosevelt", correct: false}, {text: "Roosevelt, Chamberlain, Stalin", correct: false}] },
    { question: "What was the 'Final Solution'?", answers: [{text: "The Nazi plan to win the war in Russia", correct: false}, {text: "The Nazi plan for the genocide of the Jewish people", correct: true}, {text: "The Allied plan to drop the atomic bomb", correct: false}, {text: "The treaty that ended WWII", correct: false}] },
    { question: "Auschwitz was located in which German-occupied country?", answers: [{text: "France", correct: false}, {text: "Germany", correct: false}, {text: "Austria", correct: false}, {text: "Poland", correct: true}] },
    { question: "What does 'VE Day' stand for?", answers: [{text: "Victory Eternal", correct: false}, {text: "Victory in Europe", correct: true}, {text: "Veteran Engagement", correct: false}, {text: "Victory Expansion", correct: false}] },
    { question: "Which air force defended Britain during the Battle of Britain?", answers: [{text: "Luftwaffe", correct: false}, {text: "United States Army Air Forces", correct: false}, {text: "Royal Air Force (RAF)", correct: true}, {text: "Soviet Air Forces", correct: false}] },
    { question: "What happened at Dunkirk in 1940?", answers: [{text: "A massive tank battle", correct: false}, {text: "The evacuation of Allied soldiers from the beaches", correct: true}, {text: "The signing of the French surrender", correct: false}, {text: "The first use of the atomic bomb", correct: false}] },
    { question: "What was a primary goal of Japanese militarism in the 1930s?", answers: [{text: "To spread democracy in Asia", correct: false}, {text: "To secure raw materials and build an empire", correct: true}, {text: "To ally with the United States", correct: false}, {text: "To eliminate the Soviet Union", correct: false}] },
    { question: "Which region did Japan invade in 1931, challenging the League of Nations?", answers: [{text: "Korea", correct: false}, {text: "Manchuria", correct: true}, {text: "Vietnam", correct: false}, {text: "Philippines", correct: false}] },
    { question: "What international organization was created immediately after WWII to replace the League of Nations?", answers: [{text: "NATO", correct: false}, {text: "The European Union", correct: false}, {text: "The United Nations", correct: true}, {text: "The Warsaw Pact", correct: false}] },
    { question: "The ideological tension that began immediately after WWII between the US and USSR is known as:", answers: [{text: "The Cold War", correct: true}, {text: "The Great Depression", correct: false}, {text: "The Iron Curtain Conflict", correct: false}, {text: "The Proxy War Era", correct: false}] },
    { question: "What was the Maginot Line?", answers: [{text: "The border between East and West Germany", correct: false}, {text: "A line of French defensive fortifications on the German border", correct: true}, {text: "The route taken by Japanese planes to Pearl Harbor", correct: false}, {text: "The British radar system", correct: false}] },
    { question: "Which German commander was known as the 'Desert Fox' in North Africa?", answers: [{text: "Hermann Göring", correct: false}, {text: "Heinrich Himmler", correct: false}, {text: "Erwin Rommel", correct: true}, {text: "Karl Dönitz", correct: false}] },
    { question: "Which country signed a non-aggression pact with Germany in 1939, only to be betrayed later?", answers: [{text: "Britain", correct: false}, {text: "The Soviet Union", correct: true}, {text: "Italy", correct: false}, {text: "France", correct: false}] },
    { question: "What strategy did the US use in the Pacific to bypass heavily fortified Japanese positions?", answers: [{text: "Trench warfare", correct: false}, {text: "Island hopping", correct: true}, {text: "Carpet bombing", correct: false}, {text: "Submarine blockades", correct: false}] },
    { question: "Which event directly caused the surrender of Japan in 1945?", answers: [{text: "The death of Adolf Hitler", correct: false}, {text: "The invasion of Okinawa", correct: false}, {text: "The dropping of atomic bombs on Hiroshima and Nagasaki", correct: true}, {text: "The Soviet victory at Stalingrad", correct: false}] }
];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionTracker = document.getElementById('question-tracker');
const scoreTracker = document.getElementById('score-tracker');
const finalScoreText = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

// State Variables
let shuffledQuestions, currentQuestionIndex;
let score = 0;

// Event Listeners
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartBtn.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hide');
    resultScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    
    // Fisher-Yates shuffle algorithm for true randomness
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    
    updateTrackers();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    updateTrackers();
}

function showQuestion(question) {
    questionText.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }

    // Disable all buttons and show correct answer
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true; // Prevents double clicking
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
    });

    updateTrackers();

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        setTimeout(showResults, 1500); // Slight delay before showing results at the end
    }
}

function updateTrackers() {
    questionTracker.innerText = `Question: ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    scoreTracker.innerText = `Score: ${score}`;
}

function showResults() {
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    finalScoreText.innerText = `${score}/${shuffledQuestions.length}`;
    
    // Provide dynamic feedback based on score
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage >= 90) {
        resultMessage.innerText = "Outstanding! You are totally ready for the exam.";
    } else if (percentage >= 70) {
        resultMessage.innerText = "Great job! A quick review of the study hub and you'll be perfect.";
    } else if (percentage >= 50) {
        resultMessage.innerText = "Good effort, but there's room for improvement. Keep studying!";
    } else {
        resultMessage.innerText = "Time to head back to the Study Hub. You've got this!";
    }
}
