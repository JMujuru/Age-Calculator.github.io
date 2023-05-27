# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

The way I tackled this project is to map out most of the HTML once I set all my IDs and Classes and structured the page well the CSS wasn't that difficult however I did use position absolute and relative to style the button/icon as that's what seemed easier to me at the time. The CSS didn't give me much trouble since I've got better with nested layout techniques using Flexbox.
The JS was the difficult part there was a lot of trial and error but in the end, I made something that seems to function the way the project wants it to.

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](/design/desktopView%20working.jpg)
![](/design/desktopViewborderColor.jpg)
![](/design/desktopViewbtn.jps.jpg)
![](/design/desktopViewErr1.jpg)
![](/design/desktopViewErr2.jpg)
![](/design/desktopViewErr3.jpg)
![](/design/mobile-design.jpg)
![](/design/mobileView.jpg)
![](/design/mobileViewWorking.jpg)

### Links

- Solution URL: (https://github.com/JMujuru/Age-Calculator.github.io)
- Live Site URL: (https://jmujuru.github.io/Age-Calculator.github.io/)

## My process

Structuring the HTML with nested layout techniques, once I finished that I quickly moved on to the CSS which wasn't that difficult only had minor difficulties with how I wanted to design the icon I decided to use positioning and it worked out well since I did a mobile 1st workflow the media queries weren't that difficult.

The Javascript was the difficult part and I had to use some resources when figuring out the age calculator. when I started working on it I first linked my document to the index HTML and made sure I had all the variables that I needed and converted them so that I could use them in JS. From here I worked the project down into smaller bits of code and then completed it together while removing code that I thought was useless or code being written smaller. I ended up using 2 functions to make the code work. One for the age and another for validation the validation was difficult especially when making sure the other parts of the code would react the way you wanted it to. there was lots of trial and error but I managed to get through as I learn a lot and know which way I would approach this.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Flexbox
- Mobile-first workflow

### What I learned

I improved on my DOM manipulation and JS syntax as well as error handling. I believe my HTML structuring has improved tremendously and so has my CSS as I didn't spend much time doing either of them when doing this project.

### Continued development

I want to improve my knowledge of Js as I believe there was an easier way in doing this challenge with a lot less code as well so when I improve my Javascript I would like to come back and do this project again

### Useful resources

- (https://www.calculatorsoup.com/calculators/time/age-calculator.php) - This site helped me with the math of the age calculator

## Author

- Frontend Mentor - [@JMujuru](https://www.frontendmentor.io/profile/JMujuru)

## Acknowledgments

https://www.youtube.com/@MysteryCode
