// program to check if the given string is palindrome or not

function checkPalindrome() {

    let string = prompt('Enter a string: ');
   // check the length of the string
    let len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            alert("Entered string is not a palindrome");
        } else {
            alert("Entered string is a palindrome");
        }
    } 
}



//Program to display the factorial of the given number.

function factorial_number() {

    let given_num = prompt("Enter a number:");
    let factorial = 1;
    if(given_num < 0) {
        alert("factorial for given number doesn't exist");
    } else if(given_num == 0) {
        alert("factorial of" + given_num + "is 1");
    } else {
    for(let i = given_num; i >= 1; i = i - 1){
        factorial = factorial * i;
}
alert('factorial of number is ' +factorial);
}
}

//Program to display the number of consonants in a given string.

function consonant_count(){  

    let given_string = prompt("Enter the string:");
    let count = 0;
  for(let i = 0; i < given_string.length; i = i + 1) {
    if(given_string[i]!== "a" && given_string[i]!== "e" && given_string[i]!== "i" && given_string[i]!== "o" && given_string[i]!== "u") {
        count = count + 1;
    }
     }
  alert(count);
  }
  
  





