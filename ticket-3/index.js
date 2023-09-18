function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    if ("9" === digit) {
      count++;
    }
  }
  return count;
}
alert(countNumberOfNinesInNumber("99.999"));
console.log(countNumberOfNinesInNumber("99.999"))