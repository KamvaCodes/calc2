
//save all the buttons inside the buttons variable
let buttons = document.querySelectorAll('button')

//save the buttons inside the
const displayOutput = document.querySelector('.display')

buttons.forEach(function(button) {
    button.addEventListener('click', calculate)
  });

// calculate function
function calculate(event) {
    // current clicked buttons value

    const clickedButton = event.target.value;
  
    if (clickedButton === '=') {
      // check if the display is not empty then only do the calculation

      if (displayOutput.value !== '') {
        // calculate and show the answer to display
        displayOutput.value = eval(displayOutput.value) //eval function does the calculation
      }
    } else {
      // otherwise concatenate it to the display
      displayOutput.value += clickedButton
    }
  }



