 // Function 1: Addition
 function addition(a, b, c = 0, d = 0) {
    return a + b + c + d;
  }
  
  // Function 2: Subtraction
  function subtraction(a, b, c = 0, d = 0) {
    return a - b - c - d;
  }
  
  // Function 3: Multiplication
  function multiplication(a, b, c = 1, d = 1) {
    return a * b * c * d;
  }
  
  // Function 4: Division
  function division(a, b, c = 1, d = 1) {
    return a / b / c / d;
  }
  
  // Testing the functions
  console.log(addition(2, 3)); // Output: 5
  console.log(subtraction(10, 5)); // Output: 5
  console.log(multiplication(2, 3)); // Output: 6
  console.log(division(10, 2)); // Output: 5