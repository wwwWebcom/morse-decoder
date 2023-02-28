const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let resultExpr = "";
  let resultStringDecoder = " ";
  for (let i = 0; i < expr.length; i += 2) {
    if (i % 10 === 0) {
      resultExpr += " ";
    }
    if (expr[i] + expr[i + 1] === "10") {
      resultExpr += ".";
    }
    if (expr[i] + expr[i + 1] === "11") {
      resultExpr += "-";
    }
    if (expr[i] + expr[i + 9] === "**") {
      resultExpr += "**********";
    } else {
      ("");
    }
  }
  const arr = resultExpr.split(" ").slice(1);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let key in MORSE_TABLE) {
      if (key === arr[i]) {
        resultStringDecoder += MORSE_TABLE[key];
      }
    }
    if (arr[i] === "**********") {
      resultStringDecoder += " ";
    }
  }
  return resultStringDecoder.trim();
}

module.exports = {
  decode,
};
