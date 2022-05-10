let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  //grabbing the liveScreen
  let res = document.getElementById("result");

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    e.preventDefault();

    res.value = calculate(res.value || null);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    let resultInput = res.value;

    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}

// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}

// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
  if (!res.value) {
    res.value = "";
  }
  res.value += value;
}

// Swaps the stylesheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") === lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}

// 1+2-3*4/3


function calculate(input) {
  let firstValue = 0;
  let secondValue = 0;
  let result = '';
  let prevOperator = '';
  let nextOperator = '';
  let res = document.getElementById("result");
  let newArray = Array.from(input);
  let indexOperator = '';
  let primeirasOp = false;
  let resultFirstOp = 0;

  let arrayNumber = newArray.map((element, index) => {
    if (element !== '+' && element !== '-' && element !== '*' && element !== '/') {
      let numbers = parseInt(element);
      return numbers;
    } else {
      return element

    }
  });

  let qtdOperators = arrayNumber.filter(element => typeof (element) === "string");

  console.log(arrayNumber)

  arrayNumber.forEach(element => {

    if (arrayNumber.includes('/') || arrayNumber.includes('*')) {
      primeirasOp = true;

    } else {
      primeirasOp = false;

    }

    if (primeirasOp) {
      switch (element) {
        case '*':
          if (firstValue) {
            indexOperator = arrayNumber.indexOf(element);
            nextOperator = Number(arrayNumber.slice(indexOperator + 1, indexOperator + 2));
            firstValue = firstValue * nextOperator;
            // arrayRemoved = arrayNumber.splice(indexOperator - 1, 3, firstValue)
            // currentyElement = '*';


          } else {
            indexOperator = arrayNumber.indexOf(element);
            prevOperator = Number(arrayNumber.slice(indexOperator - 1, indexOperator));
            nextOperator = Number(arrayNumber.slice(indexOperator + 1, indexOperator + 2));
            firstValue = prevOperator * nextOperator;
            res.value = firstValue;
            // arrayRemoved = arrayNumber.splice(indexOperator - 1, 3, firstValue)
            // currentyElement = '*';

          }
          break;
        case '/':
          if (firstValue) {
            indexOperator = arrayNumber.indexOf(element);
            nextOperator = Number(arrayNumber.slice(indexOperator + 1, indexOperator + 2));
            firstValue = firstValue / nextOperator;
            resultFirstOp = firstValue;
            res.value = resultFirstOp;
          } else {
            indexOperator = arrayNumber.indexOf(element);
            prevOperator = Number(arrayNumber.slice(indexOperator - 1, indexOperator));
            nextOperator = Number(arrayNumber.slice(indexOperator + 1, indexOperator + 2));
            firstValue = prevOperator / nextOperator;
            resultFirstOp = firstValue;
            res.value = firstValue;
            //primeirasOp = false;
            // arrayRemoved = arrayNumber.splice(indexOperator -1, 3, firstValue);


          }

          break;



      }


    } else {

      switch (element) {
        case '+':
          if (secondValue) {
            indexOperator = arrayNumber.indexOf(element);
            prevOperator = secondValue;
            nextOperator = resultFirstOp;
            secondValue = prevOperator + nextOperator;
            res.value = secondValue;
            //currentyElement = '/';


          } else {
            indexOperator = arrayNumber.indexOf(element);
            prevOperator = Number(arrayNumber.slice(indexOperator - 1, indexOperator));
            nextOperator = Number(arrayNumber.slice(indexOperator + 1, indexOperator + 2));
            secondValue = prevOperator + nextOperator;
            res.value = secondValue;
            // arrayRemoved = arrayNumber.splice(indexOperator -1, 3, firstValue);
            //currentyElement = '/';

          }
          break;
        case '-':
          if (secondValue) {
            indexOperator = arrayNumber.indexOf(element);
            prevOperator = secondValue;
            nextOperator = resultFirstOp;
            secondValue = prevOperator - nextOperator;
            res.value = secondValue;
            //currentyElement = '/';


          } else {
            indexOperator = arrayNumber.indexOf(element);
            prevOperator = Number(arrayNumber.slice(indexOperator - 1, indexOperator));
            nextOperator = Number(arrayNumber.slice(indexOperator + 1, indexOperator + 2));
            secondValue = prevOperator - nextOperator;
            res.value = secondValue;
            // arrayRemoved = arrayNumber.splice(indexOperator -1, 3, firstValue);
            //currentyElement = '/';

          }
          break;







      }

    }









    res.value = secondValue;
    res.value = firstValue;





    console.log(secondValue)

























  })
}