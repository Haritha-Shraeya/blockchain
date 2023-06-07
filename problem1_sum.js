var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_b = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n_b(n - 1);
};

var sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

// Get the input integer from command-line arguments
var input = process.argv[2];

// Convert the input to an integer
var num = parseInt(input);

// Check if the input is a valid integer
if (isNaN(num)) {
  console.log('Invalid input. Please enter an integer.');
} else {
  // Run the functions and display the results
  var resultA = sum_to_n_a(num);
  var resultB = sum_to_n_b(num);
  var resultC = sum_to_n_c(num);

  console.log('Result A:', resultA);
  console.log('Result B:', resultB);
  console.log('Result C:', resultC);
}
