# Frontend Mentor - Contact form solution


# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./assets/Screenshot%202024-06-03%20220242.jpg)

### Links

- Solution URL: [My Solution](https://github.com/yourusername/contact-form-solution)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Working on this project helped me reinforce several key concepts, including accessible form design and handling form validation. Here are a few highlights:

#### HTML
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
</form>
```

#### CSS
```css
input:focus {
  border-color: blue;
}
```

#### JavaScript
```js
const handleSubmit = (event) => {
  event.preventDefault();
  alert('Form submitted successfully!');
}
```

### Continued development

In future projects, I want to focus on:

- Enhancing form accessibility features
- Improving error handling and validation feedback
- Experimenting with different CSS frameworks for styling

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Great resource for web development documentation and examples.
- [W3Schools](https://www.w3schools.com/) - Useful for quick references and tutorials.

## Author

- Website - [CHETAN GAUTAM](https://www.your-site.com)
- Frontend Mentor - [@chetan-581](https://www.frontendmentor.io/profile/chetan-581)

## Acknowledgments

Special thanks to the Frontend Mentor community for their support and feedback on this project!