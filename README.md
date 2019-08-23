# Quiz App
### Test your HTML, CSS, and JavaScript knowledge

### Extra Features:
- 50 questions available within 10 categories
- Each quiz will display a random question of each category
- The answer order will be randomized to ensure you cannot cheat via memorization
- The end quiz state will show which categories to study based on questions missed
- A progress bar will display as you progress with color coding based on correct/incorrect answers

#### Requirements (User Interface):
- The starting screen should have a button that users can click to start the quiz.
- Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
- Users should be asked questions 1 after the other.
- Users should only be prompted with 1 question at a time.
- Users should not be able to skip questions.
- Users should also be able to see which question they're on (for instance, "7 out of 10" and their current score ("5 correct, 2 incorrect").
- Upon submitting an answer, users should:
  - receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
  - be moved onto the next question (or interact with an element to move on).
- Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
- Users should be able to start a new quiz.

#### Requirements (Technical):
- Render answer choices in a `<form>`.
- Use semantic HTML, along with CSS and jQuery.
- Follow a11y best practices.
- Refer back to the checkpoints on accessibility and forms for help.
- Use responsive design.
- Be fully usable by keyboard (which will be easy enough if you start with a form).

#### Requirements (Process):
- Gather content for your app. That means typing up the questions you'll ask and gathering any images or icons you'll need.
- Think about the user experiences outlined above and how your design must make them possible.
- Design your app using HTML wireframes, which are HTML- (and minimal CSS-) only versions of the different screens in your app.

------------

### Questions
#### Accessibility
- What is one thing the `lang` property used for?
- Why would someone use the role property?
- What is accessibility in a website?
- What does ARIA stand for?
- What is an accessible method for making keyboard navigatable image icons?

#### Arrays
- Which method would we use to return the value 4?
- How would we add a value to the end of the array?
- What would we use to remove and return the last value of the array?
- How would we find the length of the following array?
- Which index is the value 9 at in the following array?

#### Elements
- What are the 3 basic required elements for an HTML page?
- Which HTML element is the largest heading and should generally only be used once?
- Which HTML element creates a line break?
- How do we create an HTML link?
- Which of these elements are all `<table>` elements?

#### Flexbox
- What is Flexbox?
- To use flexbox we define a container as a flexbox. What is the CSS to do this?
- `flex-basis` defines what...?
- Which values are we able to use for `flex-direction`?
- What does the css property `order` for flex items allow you to do?

#### Forms
- What are considered the two most important attributes for a `form`?
- What are the some of the most popular `<input>` types?
- Which attribute of an input does the label for attribute relate to?
- Which attribute of an input type of radio links them together to ensure only one is selected?
- What is the difference between the GET and POST methods?

#### Loops
- What are the two types of JavaScript loops?
- What order do the 3 conditions of a for loop consist of?
- What conditional would we use to run this loop 5 times?
- What happens when a while loop's condition is always true?
- What will the variable count be equal to at the end of this loop?

#### Methods
- How do we convert this string of words into an array of the whole words?
- How would we replace the second word in this string with the word 'will'?
- How do you call this object's method?
- What is a JavaScript method?
- Why shouldn't we use ES6 arrow functions in object method declarations?

#### Misc CSS
- What does CSS stand for?
- How would you set a background color to red?
- What does `box-sizing: border box` do?
- What is the difference between `position: inline` and `position: inline-block`?
- What color would the `<p id='foo' class='para'>` paragraph be?

#### Conditionals
- What are two types of conditional statements in JavaScript?
- When would you use a switch statement?
- What will this conditional statement evaluate to?

#### Objects
- How do we `console.log` the value of the make of this car?
- How do we push all of an object's keys into a new array called `carProps`?
- What do you call a property of an object that is a function?
- What makes an object different than an array?
- What would the following code `console.log`?

------------

### UI/UX Wireframes
#### Mobile:
![Mobile - Splash](http://stimhaus.com/image-assets-public/quiz-app/wireframes-02.jpg)
![Mobile - Mid Quiz](http://stimhaus.com/image-assets-public/quiz-app/wireframes-03.jpg)
![Mobile - Results](http://stimhaus.com/image-assets-public/quiz-app/wireframes-04.jpg)
#### Tablet
![Tablet - Splash](http://stimhaus.com/image-assets-public/quiz-app/wireframes-05.jpg)
![Tablet - Mid Quiz](http://stimhaus.com/image-assets-public/quiz-app/wireframes-06.jpg)
![Tablet - Results](http://stimhaus.com/image-assets-public/quiz-app/wireframes-07.jpg)
### Desktop
![Desktop - Splash](http://stimhaus.com/image-assets-public/quiz-app/wireframes-08.jpg)
![Desktop - Mid Quiz](http://stimhaus.com/image-assets-public/quiz-app/wireframes-09.jpg)
![Desktop - Results](http://stimhaus.com/image-assets-public/quiz-app/wireframes-10.jpg)

### HTML Responsive Mockups
Launch: [Launch Wireframe](https://sinsys.github.io/quiz-app-remastered/wireframes/launch.html "Launch Wireframe")  
Question: [Question Wireframe](https://sinsys.github.io/quiz-app-remastered/wireframes/question.html "Question Wireframe")  
Feedback: [Feedback Wireframe](https://sinsys.github.io/quiz-app-remastered/wireframes/feedback.html "Feedback Wireframe")  
Results: [Results Wireframe](https://sinsys.github.io/quiz-app-remastered/wireframes/results.html "Results Wireframe")  