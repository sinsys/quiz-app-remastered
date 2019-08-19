
function pickRandomQuestion(section){
	let random = Math.floor(Math.random() * STORE.questions[section].length);
	console.log(random);
	return STORE.questions[section][random];
}

const STORE = {
	questions: {
		accessibility: [
			{
				question: "What is the one thing the lang property used for?",
				code: `<html lang="en">`,
				answers: [
					"To set what version of HTML the page uses",
					"To determine the linear angle for CSS properties",
					"To restrict the page to only be viewed in certain regions",
					"To be used by search engines to return language specific results"
				],
				correctAnswer: "To be used by search engines to return language specific results"
			},{
				question: "Why would someone use the role property?",
				code: `<div role="progressbar"></div>`,
				answers: [
					"To replace semantic markup",
					"To add a heading or label to a section",
					"To define what parent an element is related to",
					"To add additional info when no native element is appropriate"
				],
				correctAnswer: "To add additional info when no native element is appropriate"
			},{
				question: "What is accessibility in a website?",
				code: ``,
				answers: [
					"The usage of semantic HTML when structuring a page",
					"Using a lang attribute to define a page's native language",
					"Adding additional attributes for screen readers (alt, role, etc)",
					"All of these answers are accessibility best practices"
				],
				correctAnswer: "All of these answers are accessibility best practices"
			},{
				question: "What does ARIA stand for?",
				code: ``,
				answers: [
					"Applied Responsive Interactive Attributes",
					"Assumed Rendering of Included Articles",
					"Accrued Resource Immersive Anchors",
					"Accessible Rich Internet Applications"
				],
				correctAnswer: "Accessible Rich Internet Applications"
			},{
				question: "What is an accessible method for making keyboard navigatable image icons?",
				code: ``,
				answers: [
					"<img src='test.jpg' access='keyboard' ...>",
					"<nav keyboard='tab'><img ...></nav>",
					"<img src='test.jpg' nav='true' ...>",
					"<input type='image' src='test.jpg' ...>"
				],
				correctAnswer: "<input type='image' src='test.jpg' ...>"
			}
		],
		arrays: [
			{
				question: "Which method would we use to return the value 4?",
				code: `let arr = [2,4,6,8,10]`,
				answers: [
					"arr[4]",
					"arr[2]",
					"arr[3]",
					"arr[1]"
				],
				correctAnswer: "arr[1]"
			},{
				question: "How would we add a value to the end of the array?",
				code: `let arr = ['a','b','c','d','e']`,
				answers: [
					"arr.pop('f')",
					"arr.append('f')",
					"arr.add('f')",
					"arr.push('f')"
				],
				correctAnswer: "arr.push('f')"
			},{
				question: "What would we use to remove and return the last value of the array?",
				code: `let arr = [3,1,4,1,5,9]`,
				answers: [
					"arr.remove(9)",
					"arr.grep('9')",
					"arr.shift()",
					"arr.pop()"
				],
				correctAnswer: "arr.pop()"
			},{
				question: "How would we find the length of the following array?",
				code: `let arr = [23,1,943,81,-52,3.14159]`,
				answers: [
					"arr.depth()",
					"arr.index",
					"arr.shift()",
					"arr.length"
				],
				correctAnswer: "arr.length"
			},{
				question: "Which index is the value 9 at in the following array?",
				code: `let arr = [23,1,943,81,9,3.14159]`,
				answers: [
					"2",
					"3",
					"5",
					"4"
				],
				correctAnswer: "4"
			}
		],
		elements: [
			{
				question: "What are the 3 basic required elements for an HTML page?",
				code: ``,
				answers: [
					"<header>, <main>, <footer>",
					"<start>, <middle>, <end>",
					"<html>, <body>, <script>",
					"<html>, <head>, <body>"
				],
				correctAnswer: "<html>, <head>, <body>"
			},{
				question: "Which HTML element is the largest heading and should generally only be used once?",
				code: ``,
				answers: [
					"<heading>",
					"<title>",
					"<h6>",
					"<h1>"
				],
				correctAnswer: "<h1>"
			},{
				question: "Which HTML element creates a line break?",
				code: `<p>The quick brown fox... <tag>jumped over the lazy dogs</p>`,
				answers: [
					"<break>",
					"<hr>",
					"<lb>",
					"<br>"
				],
				correctAnswer: "<br>"
			},{
				question: "How do we create an HTML link?",
				code: ``,
				answers: [
					"<link href='test.com'>Test.com</link>",
					"<a src='test.com'>Test.com</a>",
					"<href url='test.com'>Test.com</href>",
					"<a href='test.com'>Test.com</a>"
				],
				correctAnswer: "<a href='test.com'>Test.com</a>"
			},{
				question: "Which of these elements are all <table> elements?",
				code: 
					`<table>
						... 
					</table>`,
				answers: [
					"<thead>, <th>, <cell>",
					"<thead>, <tbody>, <row>",
					"<tbody>, <tr>, <cell>",
					"<thead>, <tr>, <td>"
				],
				correctAnswer: "<thead>, <tr>, <td>"
			}
		],
		flex: [
			{
				question: "What is Flexbox?",
				code: ``,
				answers: [
					"A JavaScript library for responsive design",
					"An HTML markup allowing for flexible content",
					"An development approach to creating semantic HTML",
					"A collection of CSS properties for ease of page layouts"
				],
				correctAnswer: "A collection of CSS properties for ease of page layouts"
			},{
				question: "To use flexbox we define a container as a flexbox. What is the CSS to do this?",
				code: 
					`.flex-container {
						...
					}`,
				answers: [
					"position: flex",
					"display: flexbox",
					"float: flexbox",
					"display: flex"
				],
				correctAnswer: "display: flex"
			},{
				question: "flex-basis defines what...?",
				code: 
					`.flex-item {
						flex-basis: 20px;
					}`,
				answers: [
					"The base of the flex element",
					"The margin of the flex element",
					"The boldness of the flex element",
					"The width of the flex element"
				],
				correctAnswer: "<br>"
			},{
				question: "Which values are we able to use for flex-direction?",
				code: 
					`.flex-container {
						flex-direction: ...
					}`,
				answers: [
					"flex-start, flex-end, space-between, space-around",
					"start, center, end, space-evenly",
					"horizontal, vertical, reverse-horizontal, reverse-vertical",
					"row, row-reverse, column, column-reverse"
				],
				correctAnswer: "row, row-reverse, column, column-reverse"
			},{
				question: "What does the css property order for flex items allow you to do?",
				code: 
					`.flex-item {
						order: ...
					}`,
				answers: [
					"Specify the direction that flex items appear",
					"Define when each flex item is loaded",
					"Sort flex items by different values (alphabetical, numerical)",
					"Specify which order the flex items appear"
				],
				correctAnswer: "Specify which order the flex items appear"
			}
		],
		forms: [
			{
				question: "What are considered the two most important attributes for a form?",
				code: `
					<form ...>
					</form>`,
				answers: [
					"lang, process",
					"before, after",
					"id, class",
					"method, action"
				],
				correctAnswer: "method, action"
			},{
				question: "What are the some of the most popular <input> types?",
				code: `<input type='...'>`,
				answers: [
					"css, target, label",
					"auto, keyboard, mouse",
					"text, include, exclude",
					"text, checkbox, button"
				],
				correctAnswer: "text, checkbox, button"
			},{
				question: "Which attribute of an input does the label for attribute relate to?",
				code: 
					`<label for=...></label>
					<input ...>`,
				answers: [
					"role",
					"value",
					"type",
					"id"
				],
				correctAnswer: "id"
			},{
				question: "Which attribute of an input type of radio links them together to ensure only one is selected?",
				code: `<input type='radio' ...>`,
				answers: [
					"role",
					"value",
					"id",
					"name"
				],
				correctAnswer: "name"
			},{
				question: "What is the difference between the GET and POST methods?",
				code: `
					<form method='get'>
					<form method='post'>`,
				answers: [
					"The GET method simply retrieves data while POST can send and receive",
					"The POST method simply submits data while GET can send and receive",
					"The POST method is used for different database types",
					"The GET method sends all information in the URL"
				],
				correctAnswer: "The GET method sends all information in the URL"
			}
		],
		loops: [
			{
				question: "What are the two types of JavaScript loops?",
				code: ``,
				answers: [
					"loop, cycle",
					"inclusive, exclusive",
					"anonymous, declared",
					"for, while"
				],
				correctAnswer: "for, while"
			},{
				question: "What order do the 3 conditions of a for loop consist of?",
				code: `for(...;...;...){`,
				answers: [
					"variables; start condition; final expression",
					"variables; counter; function",
					"iteration; initialization; condition",
					"initialization; condition; final expression"
				],
				correctAnswer: "initialization; condition; final expression"
			},{
				question: "What conditional would we use to run this loop 5 times?",
				code: `for(let i=0;...; i++){`,
				answers: [
					"i===5",
					"5",
					"i<=5",
					"i<5"
				],
				correctAnswer: "i<5"
			},{
				question: "What happens when a while loop's condition is always true?",
				code: `while(5===5){ ... }`,
				answers: [
					"The execution code will never run",
					"The execution code will run once",
					"A syntax error will halt the page at run time",
					"The execution code will run indefinitely"
				],
				correctAnswer: "The execution code will run indefinitely"
			},{
				question: "What will the variable count be equal to at the end of this loop?",
				code: `
					let count = 0;
					for(let i=0; i<3; i++){
						count+=1;
					}
					return count;`,
				answers: [
					"1",
					"2",
					"0",
					"3"
				],
				correctAnswer: "3"
			}
		],
		methods: [
			{
				question: "How do we convert this string of words into an array of the whole words?",
				code: `let str = "The quick brown fox jumped over the lazy dogs"`,
				answers: [
					"str.split()",
					"str.words('')",
					"str.convert('')",
					"str.split(' ')"
				],
				correctAnswer: "str.split(' ')"
			},{
				question: "How would we replace the second word in this string with the word 'will'?",
				code: `let str = "I cannot code well"`,
				answers: [
					"str.replace('will', 'cannot')",
					"str.convert('cannot', 'will')",
					"str.mask('will', 'cannot')",
					"str.replace('cannot', 'will')"
				],
				correctAnswer: "str.replace('cannot', 'will')"
			},{
				question: "How do you call this object's method?",
				code: `
					let obj = {
						car: 'Car',
						sayCar: function(){
							console.log(this.car);
						}
					}`,
				answers: [
					"function sayCar(obj)",
					"obj.function(sayCar)",
					"sayCar()",
					"obj.sayCar()"
				],
				correctAnswer: "obj.sayCar()"
			},{
				question: "What is a JavaScript method?",
				code: ``,
				answers: [
					"A style of writing out code in a readable way",
					"The HTML tag that allows you to write JavaScript inline",
					"A type of variable that allows it to be mutable",
					"A property of an object that executes a function"
				],
				correctAnswer: "A property of an object that executes a function"
			},{
				question: "Why shouldn't we use ES6 arrow functions in object method declarations?",
				code: `
					let obj = {
						car: "Audi",
						callCar: () => { return this.car }
					}`,
				answers: [
					"Arrow functions provide extra properties that are irrelevant to the object",
					"Arrow functions require parameters",
					"Arrow functions are always anonymous",
					"Arrow functions have a different scope of this than the object"
				],
				correctAnswer: "Arrow functions have a different scope of this than the object"
			}
		],
		miscCSS: [
			{
				question: "What does CSS stand for?",
				code: ``,
				answers: [
					"Creative Standard Solution",
					"Color, Style, Scale",
					"Compressed Specific Structure",
					"Cascading Style Sheets"
				],
				correctAnswer: "Cascading Style Sheets"
			},{
				question: "How would you set a background color to red?",
				code: ``,
				answers: [
					"backgroundcolor: red",
					"color: red",
					"bg-color: red",
					"background-color: red"
				],
				correctAnswer: "background-color: red"
			},{
				question: "What does box-sizing: border box do?",
				code: `box-sizing: border-box;`,
				answers: [
					"Adds a border to the element",
					"Forces the element to maintain rectangular shape",
					"Eliminates any properties of an existing border",
					"Forces the margin, padding, and border dimensions to be inclusive of its width"
				],
				correctAnswer: "Forces the margin, padding, and border dimensions to be inclusive of its width"
			},{
				question: "What is the difference between position: inline and position: inline-block?",
				code: `
					position: inline;
					position: inline-block;`,
				answers: [
					"inline is only used to define exclusive padding and margin",
					"inline-block is only used to define additional margins",
					"inline is used to avoid wrapping elements to different rows on large screens",
					"inline-block allows a user to define a width and height"
				],
				correctAnswer: "inline-block allows a user to define a width and height"
			},{
				question: "What color would the the <p id='foo' class='para'> paragraph be?",
				code: 
					`* { color: cyan; }
					#foo { color: yellow; }
					.para { color: red; }
					p.para { color: blue; }`,
				answers: [
					"cyan",
					"red",
					"blue",
					"yellow"
				],
				correctAnswer: "yellow"
			}
		],
		conditionals: [
			{
				question: "What are two types of conditional statements in JavaScript?",
				code: ``,
				answers: [
					"if, when",
					"choice, determined",
					"switch, then",
					"if, switch"
				],
				correctAnswer: "if, switch"
			},{
				question: "What will this conditional statement evaluate to?",
				code: 
					`if(5<=2){ return true; } 
					else { return false; }`,
				answers: [
					"5 > 2",
					"true",
					"5 <= 2",
					"false"
				],
				correctAnswer: "false"
			},{
				question: "When would you use a switch statement?",
				code: ``,
				answers: [
					"When you want to produce a random outcome",
					"If there is a variable involved that may change",
					"When you need to switch a boolean to true or false",
					"When you need many differing actions for many specific evaluations"
				],
				correctAnswer: "When you need many differing actions for many specific evaluations"
			},{
				question: "What will this conditional statement evaluate to?",
				code: 
					`let foo = 1;
					if(foo){ return true; }
					else { return false; }`,
				answers: [
					"1",
					"false",
					"foo",
					"true"
				],
				correctAnswer: "true"
			},{
				question: "What will this conditional statement evaluate to?",
				code:
					`let foo = 0;
					if(foo && foo < 5){ return 1; }
					else if(foo < 5){ return 2; }
					else { return 3; }`,
				answers: [
					"1",
					"3",
					"false",
					"2"
				],
				correctAnswer: "2"
			}
		],
		objects: [
			{
				question: "How do we console.log the value of the make of this car?",
				code: 
					`let car = {
						year: 2018,
						make: "Audi",
						model: "S4"
					}`,
				answers: [
					"console.log(obj.car(make))",
					"console.log(car(make))",
					"console.log(make)",
					"console.log(car.make)"
				],
				correctAnswer: "console.log(car.make)"
			},{
				question: "How do we push all of an object's keys into a new array called carProps?",
				code: 
					`let car = {
						year: 2018,
						make: "Audi",
						model: "S4"
					}`,
				answers: [
					"let carProps = car.keys(all)",
					"let carProps = [Object(car).keys()]",
					"let carProps = car.Object.keys()",
					"let carProps = Object.keys(car)"
				],
				correctAnswer: "let carProps = Object.keys(car)"
			},{
				question: "What do you call a property of an object that is a function?",
				code:
					`let car = {
						year: 2018,
						make: "Audi",
						model: "S4",
						displayName: function(){
							return this.year + " " + this.make + " " + this.model
						}
					}`,
				answers: [
					"Object function",
					"Return function",
					"Function property",
					"Object method"
				],
				correctAnswer: "Object method"
			},{
				question: "What makes an object different than an array?",
				code: ``,
				answers: [
					"Objects can contain any data structure, while arrays cannot",
					"Arrays are only useful as a storage medium, while objects can contain functions",
					"Arrays are limited to a single dimension, while objects can be nested",
					"Objects associate keys and values, while arrays are simply a list of data"
				],
				correctAnswer: "Objects associate keys and values, while arrays are simply a list of data"
			},{
				question: "What would the following code console.log?",
				code:
					`let obj = {
						total: 5,
						multiplier: 4,
						multiply: function(){
							return this.total * this.multiplier;
						}
					}
					console.log(obj.multiply * 2);`,
				answers: [
					"10",
					"8",
					"80",
					"40"
				],
				correctAnswer: "40"
			}
		]
	}
}



// Create quiz
function createQuiz(){

};

// Update DOM
function updateDOM(){

};
function showAllQuestions(obj){
	let allSections = Object.keys(obj.questions);
	console.log(allSections);
	let counter = 0;
	for(let i=0; i<allSections.length;i++){
		
		for(let j=0; j<obj.questions[allSections[i]].length; j++){
			$('#output').append(obj.questions[allSections[i]][j].question);
			$('#output').append('<br>');
			counter++;
		}
	}
	console.log(counter);
}
showAllQuestions(STORE);
$(function(){


});
