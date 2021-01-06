function checkForUnique(alphabet) {
  for (let i in alphabet) {
    if (alphabet.lastIndexOf(alphabet[i]) != i) {
      return false;
    }
  }
  return true;
}

function substitution(input, alphabet, encode = true) {
  //alphabet must be string to move forward!
  if (typeof alphabet !== "string") {
    return false;
  }

  const inSpltAndLwr = input.toLowerCase().split(" ");
  const alphaLower = alphabet.toLowerCase();
  const correctAlpha = "abcdefghijklmnopqrstuvwxyz".split("");

  //if alphabet incorrect size, return false
  if (alphaLower.split("").length != 26 || !checkForUnique(alphaLower)) {
    return false;
  }

  //creates object with keys as original letter place, while value is letter substitute
  const subAlph = () => {
    const obj = {};
    //creates obj with keys from provided alphabet if encode is false
    if (!encode) {
      alphaLower.split("").forEach((key, i) => (obj[key] = correctAlpha[i]));
    } else {
      correctAlpha.forEach((key, i) => (obj[key] = alphaLower.split("")[i]));
    }
    return obj;
  };

  //encoding OR decoding starts below
  const subAlphResp = subAlph(); //key for decoding/encoding
  const substituteChars = [];

  for (let i in inSpltAndLwr) {
    let singleWord = [];
    for (let j in inSpltAndLwr[i]) {
      singleWord.push(subAlphResp[inSpltAndLwr[i][j]]);
    }
    substituteChars.push(singleWord.join(""));
  }

  return substituteChars.join(" "); //this is the final return DO NOT CHANGE
}

module.exports = substitution;
