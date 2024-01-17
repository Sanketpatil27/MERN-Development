/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor() {
      this.res = 0;         // Declare 'res' using 'this' to make it an instance variable
    }

    add(data) {
      this.res += data;
    }

    subtract(data) {
      this.res -= data;
    }

    multiply(data) {
      this.res *= data;
    }

    divide(data) {
      if(data == 0)
        throw new Error(error);
        
      this.res /= data;
    }

    clear() {
      this.res = 0;
    }

    getResult(data) {
       return this.res;
    }

    calculate(expression) {
        // we can use eval method here, but have to check for exceptions like `5 + abc` so we put it in try-catch block
        // plus divisible by 0 is not handled by eval it returns infinite coz its runtime error, not javascript exception
        // so we have to take care of it
        
        // method 1: for checking division by 0
        // below code also not correct for all test cases like '10 / (2-2)'   here it isn't include '/ 0'
        // if (expression.includes('/ 0')) {
        //     throw new Error('Division by zero');
        // }

        try {
            this.res = eval(expression);
          }
          // if error occur while evaluing it comes in catch block
          catch (error) {
            throw new Error(error);
          }
          
          // method2: to detect division by 0 is to check after evaluation that res becmoes infinite or not
          if(!isFinite(this.res))
            throw new Error("division by 0");
    }
}

module.exports = Calculator;