function caesar(input, shift, encode = true) {
  //if shift is incorrectly inputted
  if (!shift || shift < -25 || shift > 25 || shift == 0) {
    return false;
  }
  //if encode is false, shift is muliplied by -1
  if (!encode) {
    shift *= -1;
  }
  //split input to character array
  let inputSplit = input.split("");
  //will hold our shifted characters
  let shiftedChars = [];
  //loop through inputSplit
  for (let index in inputSplit) {
    if (
      //checks if character falls outside of the lowercase Unicode values
      inputSplit[index].toLowerCase().charCodeAt(0) <= 96 ||
      inputSplit[index].toLowerCase().charCodeAt(0) >= 123
    ) {
      shiftedChars.push(inputSplit[index]);
    } else {
      let lowerAndCoded = inputSplit[index].toLowerCase().charCodeAt(0);
      //for each character Unicode value, apply shift value
      const shiftFunction = () => {
        let shiftedCode = lowerAndCoded + shift;
        //if shifted value falls outside of lowercase range, add or subtract 26 to loop around
        if (shiftedCode < 97) {
          return (shiftedCode += 26);
        } else if (shiftedCode > 122) {
          return (shiftedCode -= 26);
        } else {
          return shiftedCode;
        }
      };
      //turn Unicode value back to character and push
      let shiftedChar = String.fromCharCode(shiftFunction());
      shiftedChars.push(shiftedChar);
    }
  }
  return shiftedChars.join("");
}

module.exports = caesar;
