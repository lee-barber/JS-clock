|-------------------------|         
|    	  READ ME         |
|-------------------------| 

I. File list
------------------------------------------

index.html		main HTML page
index.css		CSS layout
index.js		JavaScript
morning.jpeg		background image
afternoon.jpeg		background image
evening.jpeg		background image
good morning.png	sample page (screenshot)
good afternoon.png	sample page (screenshot)
good evening.png	sample page (screenshot)
readme.txt		ReadMe text file


II. Project Details
------------------------------------------

Digital Clock Workshop: Individual

Goal: To create a single page app demonstrating understanding of basic JavaScript skills.

Assignment:

For this assignment you will be creating a digital clock using HTML, CSS and JavaScript. The finished product will be fully functional, styled and ready to show off to friends!

Note: You will choose one of the two different options below to complete this assignment. Details for each are below. Remember whichever you don’t do now you can return to later as a fun side project!

Hint: This assignment is to gain the skills needed for development, do NOT submit copied code.

Option 1:

The hex clock is a hex code that reflects the time of day in #hhmmss format instead of hh:mm:ss format. The background color of the screen is then changed based on the hex code which is created by the current time.

Option 2:

The greeting display clock that displays a random background image to the user with the time and a custom greeting based on the time of day. Ex: “Good morning”

Grading criteria:

Option 1:

JS clock is fully functional and throws zero errors
The time is in digital format to resemble a hex code
The time is displayed centered in the middle of the screen
The screen background color changes based on the current time
Option 2:

JS clock is fully functional and throws zero errors
The time is in digital format
The time is displayed centered in the middle of the screen
The screen background image changes based on time of day
The greeting is based on time of day (good morning, good afternoon, good evening..)
Complete = Meets ALL grading criteria points above.

Incomplete = Does not meet all grading criteria points above. Needs improvement or missing submission.


III. Development Considerations
------------------------------------------

When drafting my project I knew that I wanted a digital clock to be printed to the center of the screen with a surrounding the numbers.  Instead of having the background color change using Hex codes (option 1), I decided to do option 2 with a varied background based on the time of day.  It seemed appropriate to use a theme-based image for the background, such as an image with sunlight for the morning hours, and a darker image for the evening hours.  Once I knew what I wanted to develop, it was time to get to work.


IV. Coding Challenges
------------------------------------------

My greatest struggles with this project were with the JavaScript.  I was able to navigate the HTML and CSS with ease but staring at the blinking cursor in my JS file was daunting.  I broke through the word problem and figured out what I would need first--the current date and time.  Once I declared that variable using the object 'new Date', I made 3 other variables to get the current hours, minutes, and seconds.  From there I went right into my DOM manipulation but later learned that the if statements must come before that code in order to be executed.  I separated the variables, if statements, and DOM into 3 different sections, despite the fact that much of the code is asynchronous.  For instance, the DOM on line 106 would normally be written on line 16 as it pertains to that variable (or at least, that's how I've normally seen it coded).  

There is a special tweak to this project as the 'setInterval' method is called *inside* the function named 'myTimeFunction.'  As such, when the JS code is executed, the 'myTimeFunction' function executes *once* but then is reactivated with recursive action within itself and the 'myTimeFunction' never executes by itself again until the page is closed.  This may not be the most efficient way of running the JS but it's interesting to see in action.


V. Final Thoughts
------------------------------------------

I'm pleased with the outcome of this project and proud of myself for tackling it.  I wasn't sure if I was capable of making this happen but after studying the code theory and commenting how each line was being executed, I was able to put all of the pieces together and build a functional web application.


Made with <3 in Philadelphia

Copyright © by Lee Barber 2018 