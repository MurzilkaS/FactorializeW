/*Factorialize a Number
Declare a function factorialize(n) that takes an integer n as input 
and returns the factorial of the provided integer.*/

//Create a variable result for num;
//Check if num equal 0 or equal 1, the factorial will return 1;
//Create the While loop, while num >1;
//Return result
//console.log(result)


function factorialize(number) {
    var result = number;
    if (number === 0 || number === 1){
        return 1; 
    } 
    while (number > 1) { 
        number--;
      result *= number;
    }
    return result;
  }
  console.log(factorialize(5));
  


