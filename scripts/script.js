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

function invalidExpression(index) {
  if (index === 0) {
    if (element === '/' || element === '*') {
      resultFinal.value = "Invalid expression!"
      qtdOperators = 0;
    }
  }

}

function transformArray(newArray) {
  let transformedArray = newArray.map((element, index) => {
    if (element !== '+' && element !== '-' && element !== '*' && element !== '/') {
      let numbers = Number(element);
      return numbers;
    } else {
      return element
    }
  });
  return transformedArray;
}

function countOperators(arrayTransformed) {
  let qtdOperators = arrayTransformed.filter(element => typeof (element) === "string");
  return qtdOperators.length;
}

function negativeNumber(arrayTransformed) {
  let currentElement = '';
  let nextElement = '';
  let negativeNumber = 0;
  let newNegativenumber = 0
  arrayTransformed.forEach((element, index) => {
    currentElement = arrayTransformed.at(index);
    nextElement = arrayTransformed.at(index + 1);
    if (typeof (element) === "string" && typeof (currentElement) === typeof (nextElement)) {
      if (nextElement === '-') {
        negativeNumber = arrayTransformed.at(index + 2);
        newNegativenumber = negativeNumber * (-1);
        arrayTransformed.splice(index + 1, 2, newNegativenumber);
      }
    }
  });
  return arrayTransformed;
}

function concatNumber(treatedArray) {
  let currentNumber = [];
  let arrayConcat = [];
  let nextElement = '';
  let prevElement = '';
  let resultFinal = document.getElementById("result");

  treatedArray.forEach((element, index) => {
    nextElement = treatedArray.at(index + 1);
    prevElement = treatedArray.at(index - 1);
    if (typeof (element) === "number") {
      if (typeof (prevElement) === "string" && typeof (nextElement) === "string") {
        arrayConcat.push(element);
      } else {
        currentNumber.push(element);
      }
    } else {
      if (index === 0) {
        if (element === '*' || element === '/') {
          resultFinal.value = "Invalid expression!"
          throw new Error("Invalid expression!")
        }
      }
      if (index === 0) {
        if (element === '-' || element === '+' && index === 0) {
          arrayConcat.push(Number(currentNumber.join('')));
          arrayConcat.push(element);
        }
      } else {
        if (element === '-' || element === '+' || element === '*' || element === '/') {
          if (currentNumber.length > 1) {
            arrayConcat.push(Number(currentNumber.join('')));
            arrayConcat.push(element);
          } else {
            if (currentNumber.length === 1) {
              arrayConcat.push(Number(currentNumber));
            }
            arrayConcat.push(element);
          }
        }
      }
      if (typeof (nextElement) === "string") {
        arrayConcat.push(element);
      }
      currentNumber = [];
    }
  });
  arrayConcat.push(Number(currentNumber.join('')));
  return arrayConcat;
}

function calculate(input) {
  let resultFinal = document.getElementById("result");
  let result = '';
  let beforeOperator = '';
  let afterOperator = '';
  let newArray = Array.from(input);

  const arrayTransformed = transformArray(newArray);
  const negativeNum = negativeNumber(arrayTransformed);
  const qtdOperators = countOperators(arrayTransformed);
  const treatedArray = concatNumber(arrayTransformed);

  treatedArray.forEach((element, index) => {
    try {
      let ctt = 0
      while (ctt < qtdOperators) {
        ctt++
        if (treatedArray.includes('/')) {
          let index = treatedArray.indexOf('/')
          beforeOperator = treatedArray.at(index - 1);
          afterOperator = treatedArray.at(index + 1);
          result = beforeOperator / afterOperator;
          treatedArray.splice(index - 1, 3, result);

        } else if (treatedArray.includes('*')) {
          let index = treatedArray.indexOf('*')
          beforeOperator = treatedArray.at(index - 1);
          afterOperator = treatedArray.at(index + 1);
          result = beforeOperator * afterOperator;
          treatedArray.splice(index - 1, 3, result);

        } else if (treatedArray.includes('-')) {
          let index = treatedArray.indexOf('-')
          beforeOperator = treatedArray.at(index - 1);
          afterOperator = treatedArray.at(index + 1);
          result = beforeOperator - afterOperator;
          treatedArray.splice(index - 1, 3, result);
        } else if (treatedArray.includes('+')) {
          let index = treatedArray.indexOf('+')
          beforeOperator = treatedArray.at(index - 1);
          afterOperator = treatedArray.at(index + 1);
          result = beforeOperator + afterOperator;
          treatedArray.splice(index - 1, 3, result);

        }
        resultFinal.value = result;
      }
    } catch (err) {
      resultFinal.value = err;
    }
  });
  return resultFinal.value;
}