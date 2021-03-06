function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j])
            return false;
    }
    return true;
}

let palindrome = "radar";
let notPalindrome = "cat";

console.log(palindrome, "is palindrome:", isPalindrome(palindrome));
console.log(notPalindrome, "is palindrome:", isPalindrome(notPalindrome));