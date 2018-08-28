document.getElementById("demo").innerHTML = 5 + 6;
document.write(5 + 6);
window.alert(5 + 6);
console.log(5 + 6);
// .innerHTML-Writing into an HTML element
// document.write()-Writing into the HTML output
// window.alert()-Writing into an alert box
// console.log()-Writing into the browser console

var x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
// JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.
// Semicolons separate JavaScript statements. Add a semicolon at the end of each executable statement
// When separated by semicolons, multiple statements on one line are allowed
a = 5; b = 6; c = a + b;
// JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
var person = "Hege";
var person="Hege";
// A good practice is to put spaces around operators ( = + - * / )
var x = y + z;
// JavaScript statements can be grouped together in code blocks, inside curly brackets {...}. The purpose of code blocks is to define statements to be executed together.
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}
// "break"- Terminates a switch or a loop
// "continue"- Jumps out of a loop and starts at the top
// "debugger"- Stops the execution of JavaScript, and calls (if available) the debugging function
// "do ... while"- Executes a block of statements, and repeats the block, while a condition is true
// "for"- Marks a block of statements to be executed, as long as a condition is true
// "function"- Declares a function
// "if ... else"- Marks a block of statements to be executed, depending on a condition
// "return"- Exits a function
// "switch"- Marks a block of statements to be executed, depending on different cases
// "try ... catch"- Implements error handling to a block of statements
// "var"- Declares a variable

// The JavaScript syntax defines two types of values: Fixed values and variable values. Fixed values are called literals. Variable values are called variables.
// The most important rules for writing fixed values(literals) are:
// Numbers are written with or without decimals
// Strings are text, written within double or single quotes
// In a programming language, variables are used to store data values. JavaScript uses the var keyword to declare variables. An equal sign is used to assign values to variables.
var x;
x = 6;
// JavaScript uses arithmetic operators ( + - *  / ) to compute values
(5 + 6) * 10
// JavaScript uses an assignment operator ( = ) to assign values to variables
var x, y;
x = 5;
y = 6;
// An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an evaluation.
// Expressions can also contain variable values
// The values can be of various types, such as numbers and strings.
// JavaScript keywords are used to identify actions to be performed.
// The var keyword tells the browser to create variables
// Not all JavaScript statements are "executed". Code after double slashes // or between /* and */ is treated as a comment. Comments are ignored, and will not be executed
// Identifiers are names. In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels). The rules for legal names are much the same in most programming languages. In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($). Subsequent characters may be letters, digits, underscores, or dollar signs.
// All JavaScript identifiers are case sensitive. Meaning that you cannot misspell anything or else it won't work.
// JavaScript does not interpret VAR or Var as the keyword var.
// Historically, programmers have used different ways of joining multiple words into one variable name:
// Hyphens:
// first-name, last-name, master-card, inter-city.
// Hyphens are not allowed in JavaScript. They are reserved for subtractions.
// Underscore:
// first_name, last_name, master_card, inter_city.
// Upper Camel Case (Pascal Case):
// FirstName, LastName, MasterCard, InterCity.
// Lower Camel Case:
// JavaScript programmers tend to use camel case that starts with a lowercase letter:
// firstName, lastName, masterCard, interCity.
// JavaScript uses the Unicode character set. Unicode covers (almost) all the characters, punctuations, and symbols in the world.
// https://www.w3schools.com/charsets/ref_html_utf8.asp

// Single line comments start with //. Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
// Multi-line comments start with /* and end with */. Any text between /* and */ will be ignored by JavaScript.
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
// Using comments to prevent execution of code is suitable for code testing. Adding // in front of a code line changes the code lines from an executable line to a comment.

// JavaScript variables are containers for storing data values.