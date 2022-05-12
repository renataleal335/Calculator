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
  let resultFinal = document.getElementById("result");
  let result = '';
  let beforeOperator = '';
  let afterOperator = '';
  let newArray = Array.from(input);
  console.log(newArray)

  let arrayTransformed = transformArray(newArray);
  let qtdOperators = countOperators(arrayTransformed);
  let treatedArray = concatNumber(arrayTransformed);


  console.log(treatedArray)

  treatedArray.forEach((element, index) => {
    if (index === 0 && element === '*' || index === 0 && element === '/') {
      resultFinal.value = "Invalid expression!"
      qtdOperators = 0

    }
    if (qtdOperators > 0) {
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
    }
  });
  return resultFinal.value;
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

/* function negativeNumber (){

} */

function concatNumber(treatedArray) {
  let currentNumber = [];
  let arrayConcat = [];
  treatedArray.forEach((element, index) => {
    if (typeof (element) === "number") {
      currentNumber.push(element)
    } else {

  if (element !== '*' && element !== '/') {
        arrayConcat.push(Number(currentNumber.join('')));
      }

      arrayConcat.push(element);
      currentNumber = [];
    }
  });
  arrayConcat.push(Number(currentNumber.join('')));
  return arrayConcat;
}