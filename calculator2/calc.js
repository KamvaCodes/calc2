
//save all the buttons inside a variable
let buttons = document.querySelectorAll('button')

//save the buttons inside the
const displayOutput = document.getElementById("display");

buttons.forEach(function(button) {
    button.addEventListener('click', calculate)
  });

// calculate function
function calculate(button) {
    // current clicked buttons value

    const clickedButton = button.target.value;
  
    if (clickedButton === '=') {
      // check if the display is not empty then only do the calculation

      if (displayOutput.value !== '') {
        // calculate and display the answer
        displayOutput.value = eval(displayOutput.value) //eval function executes the calculation
      }
    } else {
      // otherwise concatenate it to the display
      displayOutput.value += clickedButton
    }
  }



