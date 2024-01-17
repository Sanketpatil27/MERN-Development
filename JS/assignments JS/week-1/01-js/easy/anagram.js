/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
  should match lowercase with uppercase
*/

function isAnagram(str1, str2) {
    // brute force using sorting 
    // 1.first convert all string into lowercase
    // 2.In this approach, we will use the split() method in order to convert our string into an array first.
    // 3.We will apply the sort() method on that converted array in order to sort the characters alphabetically.
    // 4.After sorting the characters alphabetically, we will convert our array back into the string itself using the method called join().
    str1 = str1.toLowerCase().split("").sort().join('');
    str2 = str2.toLowerCase().split("").sort().join('');

    // console.log(str1, str2);

    return str1 == str2;
}

module.exports = isAnagram;