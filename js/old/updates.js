function pluralize(word) {
  word = word.toLowerCase();
  var lastLetter;
  var lastButOne = word.slice(-2);
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

	// var pluralized = document.getElementById("pluralized").innerText = word;

  var irregularSame = ["sheep", "fish", "deer", "species", "aircraft", "moose", "salmon", "trout", "offspring", "information"];
  for (var i = 0; i < irregularSame.length; i++){
    if (word === irregularSame[i]){
      return document.getElementById("pluralized").innerText = word;
    } else
  }
  for(var i = 0; i < consonants.length; i++){
      if (lastButOne === consonants[i]){

        }
    }

  switch (lastLetter = word.slice(-1)) {
      case "s":
          word = word += "es";
          break;
      case "x":
          word = word += "es";
          break;
      case "z":
          word = word += "es";
          break;
      case "h":
          word = word += "es";
          break;
      case "y":
          word = word.slice(0, -1);
          word += "ies";
          break;
      case "f":
          word = word.slice(0, -1);
          word += "ves";
          break;
      default:
          word = word += "s";
  }
  return word;
}

pluralize("apple")
