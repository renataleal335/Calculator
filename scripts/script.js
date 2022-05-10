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


    }else{

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






  /*   arrayNumber.forEach((element, index) => {
      if (element === '+' || element === '-') {
        switch (element) {
          case '+':
            indexOperator = arrayNumber.indexOf(element);
            prevOperator = Number(arrayNumber.slice(indexOperator - 1, indexOperator));
            prevOperatorIndex = prevOperator[index];
            console.log(prevOperatorIndex)
            nextOperator = Number(arrayNumber.slice(indexOperator + 1, indexOperator + 2));
            firstValue = prevOperator + nextOperator;
            // arrayRemoved = arrayNumber.splice(indexOperator -1, 3, firstValue);
            currentyElement = '+';
            break;
          case '-':
            indexOperator = arrayNumber.indexOf(element);
            prevOperator = Number(arrayNumber.slice(indexOperator - 1, indexOperator));
            prevOperatorIndex = prevOperator[index];
            console.log(prevOperatorIndex)
            nextOperator = Number(arrayNumber.slice(indexOperator + 1, indexOperator + 2));
            firstValue = prevOperator - nextOperator;
            // arrayRemoved = arrayNumber.splice(indexOperator -1, 3, firstValue);
            currentyElement = '-';
            break;
        }
        res = firstValue;

      }

    }) */



}















/* 
let ctt = 0;
while (ctt < qtdOperators.length) {
  ctt++
  if (typeof (element) === "string") {

    if (element === '*') {
      indexFirstOperator = arrayNumber.indexOf(element);



    } else if (element === '/') {
      indexFirstOperator = arrayNumber.indexOf(element);


    } else if (element === '+') {
      indexFirstOperator = arrayNumber.indexOf(element);



    } else if (element === '-') {
      indexFirstOperator = arrayNumber.indexOf(element);


    }







    if (index !== indexFirstOperator) {
      console.log(index)
    } */




// itemNextOperator = Number(arrayNumber.slice(index + 1, index + 2));
//console.log(`dentro do if diferente ${itemNextOperator}`)

/* console.log(element, itemNextOperator)
con


switch (element !== curr) {

  case '*':
    firstValue = firstValue * itemNextOperator;

    break;

  case '/':
    firstValue = firstValue / itemNextOperator
    break;

  case '+':
    firstValue = firstValue + itemNextOperator
    break;

  case '-':
    firstValue = firstValue - itemNextOperator
    break;
}
result = firstValue;
res.value = result; */











/*  };

}

 */

















//console.log(arrayNumber)

//console.log(firstValue)
//console.log(`andes do operador ${element} : ${itemPrevOperator}`)


/* if (qtdOperators.length > 1) {
  switch (element) {
    case '-':
      result = firstValue - itemNextOperator;
      console.log(firstValue, itemNextOperator)
      break;
    case '+':
      result = firstValue + itemNextOperator;
      console.log(firstValue, itemNextOperator)
      break;
  }

} */

/* if (index === 1) {
  itemPrevOperator = Number(arrayNumber.slice(0, index));
  //console.log(`andes do operador ${element} : ${itemPrevOperator}`)

  itemNextOperator = Number(arrayNumber.splice(index + 1, index))
//  console.log(`depois do operador ${element} : ${itemNextOperator}`)

}else{
  itemNextOperator = Number(arrayNumber.splice(index + 1, index))
 // console.log(`depois do operador ${element} : ${itemNextOperator}`)

}


if (typeof (element) === "string") {



  switch (element) {
    case '+':
      firstValue = itemPrevOperator + itemNextOperator;
      Array.from(arrayNumber.splice(0, 2, firstValue));


      break;


  }
} */



/*  if (typeof (element) === "string") {
       
       
       //console.log(itemPrevOperator)
       

       itemNextOperator = arrayNumber.splice(3)
       //console.log(itemNextOperator)
       
       switch (element) {
         case '+':
           firstValue = itemPrevOperator + itemNextOperator
           break;

         case '-':
           firstValue = itemPrevOperator - itemNextOperator
           break;

         case '*':
           firstValue = itemPrevOperator * itemNextOperator
           break;

         case '/':
           firstValue = itemPrevOperator / itemNextOperator
           break;
       }
       //console.log(firstValue)
     }
     break; */



/* itemPrevOperator = Number(arrayNumber.slice(0, index))
//console.log(`o numero antes do ${element} é ${itemPrevOperator}`)


itemNextOperator = Number(arrayNumber.slice(index + 1))
//console.log(`o numero DEPOIS do ${element} é ${itemNextOperator}`) */


//console.log(`achei uma string ! ela é  ${element} e seu index é ${index}`)

//    const regex = new RegExp(/[+-/*]/i);
//const numList = input.split(/['']/i);

/* const regex = new RegExp(/[+-/*]/i);
      switch (regex.exec(element)[0]) {
        case '+':
          const newElement = element.split(/['']/i);
        
          break;
        case '-':
          console.log('é uma subtração');
          break;
        case '/':
          console.log('divisão');
          break;
        case '*':
          console.log('vezes');
          break;
        default:
          console.error('Operation not found');
          break;
      }
 */





/* let newArray = Array.from(input)
let arrayNumber = newArray.map((element, index) => {
  if (element !== '+' && element !== '-' && element !== '*' && element !== '/') {
    let numbers = parseInt(element);
    return numbers;
  }else{
    return element;
  }
   
  
});

console.log(arrayNumber) */



/* const count = 0
let itemPrevOperator = ''
let itemNextOperator = ''
newArray.forEach((element, index) => {
  if (element === '+' || element === '-') {
    itemPrevOperator = newArray.slice(0, index)
    //newArray.slice(0, index + 1).toString().replace(/,/g, '')

    itemNextOperator = newArray.slice(index + 1, newArray.length)
    //toString().replace(/,/g, '')

  }

})
console.log('item antes do', itemPrevOperator)
console.log('item depois d0', itemNextOperator) */

/* function calculate(input) {
  let newArray = Array.from(input);
  let arrayOperator = [];
  let arrayNumbers = [];
  
 
 newArray.map((element, index) => {
    if( element !== '+' && element !== '-' && element !== '*' && element !== '/'){
      arrayOperator.push(element);
    }else{
      arrayNumbers.push(element)
    }
  })
  


  console.log(newArray2)
 


} */


/*   let newArray = Array.from(input)
  console.log(newArray)
  let count = 0
  newArray.forEach((element, index) => {
    if (element === '+') {
      count = Number(newArray.slice(0, index).toString().replace(/,/g, '')) ;
    }
  })
  console.log(count) */
/* function calculate(input) {
  let newArray = input.split('');
  let arrayNumbers = []
  newArray.map(element => {
    if(element !== '-'){
      arrayNumbers.push(element)


    }if (element !== '+') {
      arrayNumbers.push(element)
      
    } else {
      console.log
      
    }
  });
  console.log(arrayNumbers)





 //let select = input.match(/\W|_/g); 
  // let select2 = select.match(/[\\"]/g);
  //console.log(select)
  //newArray.forEach(element => {

  //let select = element.match(/\W|_/g); 

  //let newstring = select.replace('', "");
  // console.log(newstring)
  //elementlet semCaracter = Array.from(newstring);



  // });














} */