# Logo Quiz

A deployed link to the website can be found [here](https://sherryrich.github.io/logo-quiz/)

## Showcase
![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_showcase.png)


## Design

### Color Palette
* The main colours were chosen from inspiration from [The Logo Board Game](https://www.drumondpark.com/logo)

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/Logo_quiz_color_palette.png)

### Typography
* The Anek Odia font is the main font used throughout the quiz app with Roboto & Sans-Serif as the fallback fonts in case for any reason the font isn't being imported into the site correctly. Anek Odia features contemporary design and compact structre making it easily legible.

### Imagery
* The main logo images in the Quiz were chosen from inspiration from [The 100 Most Famous Logos of All-Time](https://inkbotdesign.com/100-famous-logos/)

## Wireframes

* To view all wireframes both Desktop & mobile [Click Here](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_wireframes.pdf)

![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_wireframe_homepage.PNG)

## Lighthouse Report
![Preview](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_lighthouse_report.PNG)


### Features Left to Implement
* Countdown timer per game / question.
* Random question generator.
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

## Testing
TBC


### W3C Validator Testing

#### The W3C Markup Validator and W3C CSS Validation Service were used to validate each page to sure no errors were shown upon submission.

* W3C Markup Validator - index.html [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_validator_index.PNG)
* W3C Markup Validator - play.html [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_validator_play.PNG)
* W3C Markup Validator - end.html [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_validator_end.PNG)
* W3C Markup Validator - topscores.html [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_validator_topscpres.PNG)
* TW3C CSS Validation Service - style.css [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_css_validator_style.PNG)
* TW3C CSS Validation Service - play.css [result](https://github.com/sherryrich/logo-quiz/blob/main/docs/logo_quiz_css_validator_play.PNG)


### Bugs
* Script tag was at the top of page and js wasn’t working, moved to bottom of page to solve problem.
* I have a Chrome extension error "self.processResponse is not a function" which I learned was caused by the [WhatRuns](https://github.com/vercel/next.js/discussions/33355) extension I was using. I deleted the extension to fix.
* gitpod.yml errors displaying problems in the terminal, told to ignore this by code institue.
* A lot of de-bugging due to my naming of variables and typos such as variable "score" was misspelt "scor", "num" verus "nums" and ""score.Text.innerText" versus "scoreText.innerText".
* End of quiz was diverting to /end.html and showing an error, should have been pointing to /logo-quiz/end.html.
* couldn’t get leaderboard to load at the end, I spotted another error in typo "topScores.MAP, debugged ".MAP" is not a function"
* I had the modal in different js file, quickly spotted and fixed.
* play.html wouldn't pass the html validator because src="" so added a default image as suggested by my mentor. This solution worked perfectly.
* During testing the W3C Validator flagged the duplication of ID usage.


### Unfix Bugs
CSS hover issue on Top Scores button on index.html


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

Created by Richard Sherry :+1: