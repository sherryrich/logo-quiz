# Logo Quiz

Test your skills with The Logo Quiz!
This game features 10 questions. The user must simply match the correct company logo to that of the company. The catch is the image displayed is only part of the company logo.
Inspiration for this game came when I recently bought [The Logo Board Game](https://www.drumondpark.com/logo) to play with my family

A deployed link to the website can be found [here](https://sherryrich.github.io/logo-quiz/)

## Showcase
![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_showcase.png)



## User Experience
### User Stories

### As the site creator:
* I want to create a quiz that is both fun and engaging for the user.
* I want to create a quiz that shows how important logos are to the company brand.
* I want to create a quiz that is interactive and simple and easy to use.
* I want to create a quiz that is visually appealing to the user.

### As a first time user:

* I want to play a quiz instinctively.
* I want to be able to see my progress by way of current question & score and overall result at the end.
* I want to have the option to add my score to the Top Scores list.

### As a returning user:

* I want to play again and see if I can improve on my previous attempt(s).
* Want to be able to see opther Top Scores.


## Homepage
The user is shown three buttons on the homepage, "Play", "How to Play" and "Top Scores".
The user is also shown a dynamic greeting which is depended on the users time. 

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_game_homepage.PNG)

### Play
When the user clicks the Play button they are immediately brought to the play.html page where the user is greeted with the 1st question of 10 questions. The user is also shown the current score which is defaulted to zero at the start. Under the score is the image / logo of a company. The user is then shown 4 possible answers of which they must choose one. If the user selects correctly the button will display green and the remaining 3 options will display red. The user will increase their score by 1 point and progress onto question 2. If the user selects incorrectly the answer will be displayed in red. If they select incorrectly the current score will remain the same and the user will progress onto question 2. As the user progress through the 10 questions the progress bar increases incrementally and the number of questions our of 10 also increased. Example if the user is on question 8 out of the 10 questions the progress bar will display 80% full and it will display "Question 8 of 10". This process is repeated for each question until the user completes all 10 questions.

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_game_play.PNG)

### How To Play
When the user clicks the 'How To Play' button, a modal window will pop up. Simply instructions are given to the user on how to play the game. The user then selects "continue" to revert back to the homepage.

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_game_how_to_play.PNG)

### End of Game
When the user completes all 10 possible guesses they are show the end.html page where they are shown the score they achieved and the message "Are you on the Top Scores List?
Enter your details below to find out". The user must enter a name and select save in order to see the Top Scores page which is /topscores.html.

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_game_end.PNG)

### Top Scores
If the user enters a name they are brought to the topscores.html page where the top 5 names and accompanying scores are displayed, highest at the top and lowest at the bottom.
The user now has two button options, "Play Again" which will bring the user back to the play.html page to start over or "Go Home" which will bring the user back to the Homepage, index.html page.

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_game_topscores.PNG)

## Design

### Color Palette
* The main colours were chosen from inspiration from [The Logo Board Game](https://www.drumondpark.com/logo)

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_color_palette.png)

### Typography
* The Anek Odia font is the main font used throughout the quiz app with Roboto & Sans-Serif as the fallback fonts in case for any reason the font isn't being imported into the site correctly. Anek Odia features contemporary design and compact structure making it easily legible.

### Imagery
* The main logo images in the Quiz were chosen from inspiration from [The 100 Most Famous Logos of All-Time](https://inkbotdesign.com/100-famous-logos/)

## Wireframes

* To view all wireframes both Desktop & mobile [Click Here](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_wireframes.pdf)

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_wireframe_homepage.PNG)

## Lighthouse Report
![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_lighthouse_report.PNG)


### Features Left to Implement
* Countdown timer per game / question.
* Contact form.

## Technologies Used

### Languages
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://www.javascript.com/)

### Libraries
I intentionally did not use Bootstrap or jquery on this project as I wanted to learn and master HTML CSS & JavaScript without reliance on Libraries.

### Tools
* [Google Fonts](https://fonts.google.com/) Used to compare and choose fonts.
* [Font Awesome](https://fontawesome.com/) was used for icons for aesthetic and UX purposes on the buttons.
* [Color-hex](https://www.color-hex.com/) once I identified the colors I wanted I used color-hex to generate the palette.
* [Git](https://git-scm.com/) was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub](https://github.com/) GitHub is used to store the projects code after being pushed from Git.
* [Gitpod](https://www.gitpod.io/) An online IDE linked to the GitHub repository used to write my code.
* [Google Chrome Dev tools](https://developer.chrome.com/docs/devtools/) for debugging.
* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) used for audits to measure the quality of web pages.
* [WAVE](https://wave.webaim.org/extension/) Browser Extension testing.
* [Balsamiq](https://balsamiq.com/) was used to create the Wireframes.
* [amiresponsive](http://ami.responsivedesign.is/) to see how responsive the site is on different devices.
* [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) used to inspect and find out overlow.
* [HTML Tree Generator](https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg) used extension to display any page as a tree.
* [Favicon](https://www.favicon.cc/) Used to created bookmark URL icon.
* [Unicode](https://unicode-table.com/en/1F937/) Used for Shrug Emoji in Modal

## Testing

* Browser testing was completed via Google Chrome Dev tools. Most notably iPhone SE (375 x 667) and larger screen sizes.
* I tested in various browsers, Chrome, Firefox, Safari and Edge.
* I requested code review from Code Institute fellow students on Slack channel and the feedback was very good with some notable such as 404 error when reaching the end of the quiz and CSS issue with the Top Scores button. This was resolved with the help of Suzy Bennett in identifying the box shaddow CSS issue.
* I confirmed the quiz worked as expected on every page and possible outcome / flow in the game.


#### **Navigation Testing**
| Feature        | Expected           | Testing  | Result | Pass/Fail |
| ------------- |-------------| -----|  ---------- | :----: |
| Play button    | Directed to start quiz| Click the Play button | Button navigates to start quiz | Pass |
| How to Play button | Directed to open modal with instructions on how to play quiz | Redirected to page | Redirected to page | Pass |
| Top Scores button | Directed to Top Scores page| Click Top Scores | Redirected to Top Scores page | Pass |
| End of Quiz | Shown score | Is score accurate  | Score incrementing correctly | Pass |
| End of Quiz | Option to enter Top Scores List | hit save  | must enter name first | Pass |
| End of Quiz | Option to enter Top Scores List | enter name and then save  | Redirected to top scores list | Pass |
| Play Again button | Directed to start quiz| Click the Play Again button  | Redirected to start quiz page | Pass |
| Go Home button | Directed to homepage | Click the Go Home button  | Redirected to start homepage | Pass |


### W3C Validator Testing

#### The W3C Markup Validator and W3C CSS Validation Service were used to validate each page to sure no errors were shown upon submission.

#### The W3C Markup Validator
* W3C Markup Validator - index.html [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_validator_index.PNG)
* W3C Markup Validator - play.html [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_validator_play.PNG)
* W3C Markup Validator - end.html [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_validator_end.PNG)
* W3C Markup Validator - topscores.html [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_validator_topscpres.PNG)

### W3C CSS Validator
* TW3C CSS Validation Service - style.css [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_css_validator_style.PNG)
* TW3C CSS Validation Service - play.css [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_css_validator_play.PNG)

### JSHint
* end.js [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_jshint_end.PNG) One unused variable on line 14 in end.js. The variable saveHighScore is a callback in this instance.
* howtoplay.js [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_jshint_howtoplay.PNG)
* play.js [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_jshint_play.PNG) Two warnings in play.js. The questions are actually strings. I indexed by strings as that is the format of the quesitons.
* topscores.js [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_jshint_topscores.PNG)
* greeting.js [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_jshint_greeting.PNG)

### Bugs
* Script tag was at the top of page and js wasn’t working, moved to bottom of page to solve problem.
* I have a Chrome extension error "self.processResponse is not a function" which I learned was caused by the [WhatRuns](https://github.com/vercel/next.js/discussions/33355) extension I was using. I deleted the extension to fix.
* gitpod.yml errors displaying problems in the terminal, told to ignore this by code institute tutor on slack channel #ask-us-anything.
* A lot of de-bugging due to my naming of variables and typos such as variable "score" was misspelt "scor", "num" verus "nums" and ""score.Text.innerText" versus "scoreText.innerText".
* End of quiz was diverting to /end.html and showing an error, should have been pointing to /logo-quiz/end.html.
* couldn’t get Top Scores to load at the end, I spotted another error in typo "topScores.MAP, debugged ".MAP" is not a function"
* I had the modal in different js file, quickly spotted and fixed.
* play.html wouldn't pass the html validator because src="" so added a default image as suggested by my mentor. This solution worked perfectly.
* During testing the W3C Validator flagged the duplication of ID usage. I updated the ID name for one in the html and resoled issues around CSS. After making this changes the html files passed the validator testing.
* Two JS files returned issues. These are notfied under JSHint section above.


### Unfix Bugs
CSS modal width on smaller devices


## Deployment
* The current deployment of this project was done using Gitpod.
* I used the gitpod interface to write the code and as it is linked with Github as it was easy to use the terminal to commit my files and push to my repository.
* The deployed website is hosted on Github pages for easy viewing without having to clone or fork the repository to view the running website. Deployment was done by clicking on the settings tab on my repository then navigating to "Github pages" Changing the source from none to master.
* I deployed the site to GitHub pages. 
* A deployed link to the website can be found [here](https://sherryrich.github.io/logo-quiz/)
* In the GitHub repository go to the Settings tab.
* Next from the source section drop-down select Master Branch.
* Once master branch is selected the page provides the link to the completed website. This can take a minute to activate and show live.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/sherryrich/logo-quiz/
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/sherryrich/logo-quiz/
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

For a more detailed explanations of the above process [Click Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) 


## Credits
* [James Q Quick](https://www.youtube.com/watch?v=rFWbAj40JrQ) - Build a Quiz App
* [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY) - How to Make a Quiz App
* [Florin Pop](https://www.youtube.com/watch?v=XH5OW46yO8I) -  How to create a modal
* [100 Most Famous Logos of All-Time](https://inkbotdesign.com/100-famous-logos/) - Logo images sourced via this website.
* [JavaScript Book](https://javascriptbook.com/) - great book for visually understanding JavaScript
* [Code Institute](https://codeinstitute.net/ie/) - Full Stack Developer Course
* [W3Schools](https://www.w3schools.com/) - constant source of help and inspiration
* [MDN](https://developer.mozilla.org/en-US/) - wealth of information
* [Udemy](https://www.udemy.com/course/the-web-developer-bootcamp/) - The Web Developer Bootcamp 2002
* [Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp/)- The Complete 2022 Web Development Bootcamp
* [Love Maths](https://github.com/Code-Institute-Org/love-maths) AJGreaves video tutorial on JavaScript
* [README Love Running](https://github.com/Code-Institute-Solutions/readme-template) - Inspiration for this README
* [Am I Responsive?](http://ami.responsivedesign.is/) - Tool for taking a quick snapshot of the responsive breakpoints of the website to visualise how the site will look on different device screen sizes in one place. The resulting screenshot is also used as the README.md logo image.
* [Awesome](https://fontawesome.com/) - The icons in the footer were taken from Font Awesome.
* [Google fonts](https://fonts.google.com/) for the fonts Anek Odia, Roboto and Sans-Serif.

This project is for educational use only and was created for the Code Institute Module.

## Acknowledgements
* To create this website, I relied on material covered in the Full Stack Development course by Code Institute. I also relied on information from Code Institute, Slack Community Channels, Udemy, W3Schools, MDN and YouTube for Online Web Tutorials and resources.
* Gerard McBride my tutor for reviewing my work and providing valuable feedback and advice.
* Suzy Bennett for all of her help, taking her free time to help me out on slack and walk through my code.

Created by Richard Sherry :+1: