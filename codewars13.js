// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
//
// Your function will accept three arguments:
// The first and second argument will be numbers.
// The third argument will represent a sign indicating the operation to perform on these two numbers.


function calculator(a,b,sign){
  if(typeof a != "number" || typeof b != "number"){
    return "unknown value"
  }
 else if(sign === "+"){
   return a + b
  }
  else if(sign === "-"){
    return a - b
    }
    else if(sign === "*"){
      return a * b
    }
    else if(sign === "/"){
      return a / b
    }
    else {return "unknown value"}
}
