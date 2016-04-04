// Write a function called titleCase that will take a string as it's only argument and return that word with the first letter capitalized and the rest of the word in lower case. Ex: calling titleCase("MOUNtaIn") should return "Mountain". When passed in an empty string it should return an empty string;

var word = 'moUNtain';

var titleCase = function(word) {
	var container = word.toLowerCase();
  	var capitalize = container.substr(0,1).toUpperCase();
  	var prettyWord = capitalize + container.substr(1);
  return prettyWord;
};
