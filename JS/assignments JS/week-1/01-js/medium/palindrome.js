/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // first conver string to lowercase for easyness
    str = str.toLowerCase();

    // we have to remove all punctuation and whitespaces from string, we use regex:
    
    // match any character that is not a word character (\w) or a whitespace character (\s). The gi flags make the 
    // replacement case-insensitive (i) and global (g). The second replace method removes consecutive white spaces 
    // by replacing them with a single space.
    str = str.replace(/[^\w\s]/gi, '').replace(/\s+/g, '');

    let s = 0, e = str.length-1;    // starting and ending index

    // we check first and last characters till they becomes equal
    while(s < e)
    {
        if(str[s] != str[e])
            return false;

        s++;
        e--;
    }

    // if loop completed successfully means string is palindrome
    return true;
}

module.exports = isPalindrome;
