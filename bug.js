function myFunction(a, b) {
  if (a === 0) {
    return b;
  }
  return myFunction(b % a, a);
}