const number = parseInt(prompt("Enter a positive number: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

document.write("Fibonacci Series:");
document.write(n1 + " ");
document.write(n2 + " ");

nextTerm = n1 + n2;

while (nextTerm <= number) {
  // print the next term
  document.write(nextTerm + " ");

  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;
}
