/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(char)
{
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
        return true;

    return false;
}

function countVowels(str) {
    let vowels = 0;

    // first we convert string to lowercase to easily identify both uppercase & lowercase
    str = str.toLowerCase();

    for(char of str)
      if(isVowel(char))
        vowels++;
    
    return vowels;
}

module.exports = countVowels;