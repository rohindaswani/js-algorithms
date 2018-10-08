
const toPigLatin = (text) => {
  const vowels = ["a", "e", "i", "o", "u"];

  let vowelIndex = -1;
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    if (vowels.indexOf(ch) >= 0) {
      vowelIndex = i;
      break;
    }
  }

  let result = text.slice(vowelIndex);
  result += text.slice(0, vowelIndex);
  result += "ay";

  return result.toLowerCase();
}

const isCapitalized = (word) => {
  if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) return true;
  return false;
};

const pigLatinTranslator = (text) => {

  //detect if the text is a phrase
  //split the text string on white space and store that in a variable
  //map through the words array calling toPigLatin on each word
  //find the index of the first vowel
  //splice the string from the vowelIndex to length
  //append the [0..vowelIndex] to the end of this result string
  //append "ay" to the result

  // {
  //   "hello":  "elloay",
  //   "World": "orlday",
  //   "Hello,": "Elloay,"
  //   "world!": "orlday!"
  // }

  // Hello, world! => Elloh,ay orld!way

  let result2 = {}

  let words = text.split(" ");
  let result = words.map((word) => {
    let p = toPigLatin(word);
    result2[word] = p;
    return p;}
    );

  let values = Object.keys(result2).map((word) => {
    let v = result2[word];
    let cap = isCapitalized(word);
    if (cap) {
      let c = v[0].toUpperCase();
      v = c + v.slice(1);
    }
    return v;
  });

  return values.join(" ");
}

console.log("hello", pigLatinTranslator("hello"));
console.log("hello world", pigLatinTranslator("hello world"));
console.log("Hello World", pigLatinTranslator("Hello World"));