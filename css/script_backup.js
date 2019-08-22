
// Create quiz
function createQuiz(){
	// Creating an object to store the app's state when beginning the quiz
	return {
		// Gathering a random question out of the available questions for each category
		questions: getRandomQuestions(STORE),
		// Boolean for if the quiz is in progress or not
		midQuiz: false,
		// Array of correct/incorrect answers to use for our progress bar
		progress: [],
		// Boolean to determine if the end state should display
		completed: false,
		// Monitoring which question we are currently on
		currentQuestion: 0,
		// Keeps track of total correct answers
		correctAnswers: 0,
		// Keeps current selected answer
		currentAnswer: "",
		// Keeps track of % completed
		percCorrect: 0
	}
};

// Update DOM based on app state
function updateDOM(start, appState){
	// When the app is started
	if(start){
		// Apply fadeOut/fadeIn animations
		$.when($('.start-quiz, .quit-quiz, .question, .code').fadeOut(500))
			.done(function(){
				beginQuizDOM(appState);
		    });
	} else if(appState.midQuiz){
		// Apply fadeOut/fadeIn animations

		$.when($('.question, .code, .answer-btn, .continue-btn, .continue-btn-portrait').fadeOut(500))
			.done(function(){
				loadNextQuestion(appState);
			})	
	}	
	helpers.updateProgressBar(appState);
};

function beginQuizDOM(appState){
	// Create DOM array to hold answer DOM elements before presenting them
	let $answers = [];
	// Waited for fadeOut to finish. 
	// Apply text changes and fadeIn appropriate elements
	// Remove begin classes to setup quiz mode
	// Remove hide class of hidden DOM elements for quiz mode
	$('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
	$('.submit-btn, .submit-btn-portrait, .progress, .progress-bar').removeClass('hide');
	$('.progress, .progress-bar').fadeIn(500);
	$('.question').text(appState.questions[appState.currentQuestion].question).fadeTo(500, 1);
	$('.code').text(appState.questions[appState.currentQuestion].code).fadeTo(500, 1);
	// Add in available answers for the question
	for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){
		// Add current question answer to the DOM
		let $answer = $('<button class="answer-btn"></button>');
		$answer.text(appState.questions[appState.currentQuestion].answers[i]);
		$answers.push($answer);
	}
	// Shuffle the answers
	helpers.shuffleAnswers($answers)
	// Push answers to the DOM
	$answers.forEach((answer) => {
		$('.answer-wrapper').prepend(answer);
	});
	$('.progress').text(`
		${appState.currentQuestion + 1} / ${appState.questions.length} // ${appState.percCorrect}%
	`);
}

// HELPER FUNCTIONS
// These are basic functions used to help us do misc tasks




// Highlights selected answer and sets selected answer string to quiz storage object
function selectAnswer(answer, appState){
	$('.answer-btn').removeClass('selected');
	answer.addClass('selected');
	$('.submit-btn, .submit-btn-portrait').prop("disabled", false);
	appState.currentAnswer = answer.text();
}

// Actions to perform when a user submits an answer
function submitAnswer(appState){
	// This will be returned true or false based on their answer
	let correct;
	// Add styles to the answers to show if their answer was correct or not
	$('.answer-btn').each(function () {
		if($(this).text() === appState.questions[appState.currentQuestion].correctAnswer){
			$(this).addClass('pass');
			if($(this).hasClass('selected')){
				correct = "pass";
				appState.correctAnswers++;
			}
		} else if ($(this).hasClass('selected')){
			$(this).addClass('fail');
			correct = "fail";
		}
	});
	// Add a progress bar indicator
	appState.progress.push(`<div class="progress-indicator ${correct}"></div>`);
	appState.currentQuestion++;
	appState.percCorrect = appState.correctAnswers / appState.currentQuestion;
	$('.progress').text(`
		${appState.currentQuestion + 1} / ${appState.questions.length} // ${appState.percCorrect}%
	`);
	$('.submit-btn, .submit-btn-portrait')
		.removeClass('submit-btn submit-btn-portrait')
		.addClass('continue-btn continue-btn-portrait')
		.text("Continue");
	$('.answer-btn').prop("disabled", true);
}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz(){
	$('.start-quiz, .quit-quiz').hide();
	let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
	let msgSplit = failureMsg.split(" ");
	let counter = 0;
	$('.question').empty();
	let startTroll = setInterval(function () {
		$('.question').append(msgSplit[counter] + " ");
		counter++;
		if(counter > msgSplit.length - 1){
  			clearInterval(startTroll);
  			$('.start-quiz, .quit-quiz').fadeIn();
		}
	}, 250);
}

function loadNextQuestion(appState){
	// Create DOM array to hold answer DOM elements before presenting them
	let $answers = [];

	$('.question').text(appState.questions[appState.currentQuestion].question).fadeTo(500, 1);
	// Add in available answers for the question
	for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){
		// Add current question answer to the DOM
		let $answer = $('<button class="answer-btn"></button>');
		$answer.text(appState.questions[appState.currentQuestion].answers[i]);
		$answers.push($answer);
	}
	// Shuffle the answers
	helpers.shuffleAnswers($answers)
	// Push answers to the DOM
	$answers.forEach((answer) => {
		$('.answer-wrapper').prepend(answer);
	});
	$('.progress').text(`
		${appState.currentQuestion + 1} / ${appState.questions.length} // ${appState.percCorrect}%
	`);
	$('.continue-btn, .continue-btn-portrait')
		.removeClass('continue-btn continue-btn-portrait')
		.addClass('submit-btn submit-btn-portrait')
		.text("Submit");
}
// DOM is ready. Let's start this bad boy!
// $(function(){

// 	// Placeholder for quiz data
// 	let quizData;

// 	// Start the quiz and create storage for all current quiz properties
// 	$('.start-quiz').on('click', function(){
// 		quizData = createQuiz();
// 		quizData.midQuiz = true;
// 		updateDOM(true, quizData);
// 	});

// 	// Answer selection
// 	$('.answer-wrapper').on('click', '.answer-btn', function(){
// 		selectAnswer($(this), quizData);
// 	});

// 	// Submit answer and display feedback
// 	$('.answer-wrapper').on('click', '.submit-btn, .submit-btn-portrait', function(){
// 		submitAnswer(quizData);
// 	});	
	
// 	// Load next question
// 	$('.answer-wrapper').on('click', '.continue-btn, .continue-btn-portrait', function(){
// 		loadNextQuestion(quizData);
// 		updateDOM(false, quizData);
// 	});
	
// 	// 
// 	$('.quit-quiz').on('click', function(){
// 		killQuiz();
// 	});
// });
