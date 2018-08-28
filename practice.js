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
// In programming, just like in algebra, we use variables (like price1) to hold values. In programming, just like in algebra, we use variables in expressions (total = price1 + price2).
// All JavaScript variables must be identified with unique names.These unique names are called identifiers. Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
// The general rules for constructing names for variables (unique identifiers) are:
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter
// Names can also begin with $ and _ (but we will not use it in this tutorial)
// Names are case sensitive (y and Y are different variables)
// Reserved words (like JavaScript keywords) cannot be used as names
// In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.
// JavaScript variables can hold numbers like 100 and text values like "John Doe". In programming, text values are called text strings. JavaScript can handle many types of data, but for now, just think of numbers and strings. Strings are written inside double or single quotes. Numbers are written without quotes. If you put a number in quotes, it will be treated as a text string.
// Creating a variable in JavaScript is called "declaring" a variable. You declare a JavaScript variable with the var keyword.After the declaration, the variable has no value. (Technically it has the value of undefined). To assign a value to the variable, use the equal sign.
// You can declare many variables in one statement. Start the statement with var and separate the variables by comma.
var person = "John Doe", carName = "Volvo", price = 200;
// A declaration can span multiple lines
var person = "John Doe",
carName = "Volvo",
price = 200;
// In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input. A variable declared without a value will have the value undefined.
// If you re-declare a JavaScript variable, it will not lose its value.
var carName = "Volvo";
var carName;
// As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +
// You can also add strings, but strings will be concatenated

// The assignment operator (=) assigns a value to a variable.
// The addition operator (+) adds numbers.
// The multiplication operator (*) multiplies numbers.
// (+)- Addition
// (-)- Subtraction
// (*)- Multiplication
// (/)- Division
// (%)- Modulus (Division Remainder)
// (++)- Increment
// (--)- Decrement
// (=)	operator (x = y)	same as (x = y)
// (+=)	operator (x += y)	same as (x = x + y)
// (-=)	operator (x -= y)	same as (x = x - y)
// (*=)	operator (x *= y)	same as (x = x * y)
// (/=)	operator (x /= y)	same as (x = x / y)
// (%=)	operator (x %= y)	same as (x = x % y)
// The + operator can also be used to add (concatenate) strings.
// The += assignment operator can also be used to add (concatenate) strings.
// Adding two numbers, will return the sum, but adding a number and a string will return a string
// "=="- equal to
// "==="- equal value and equal type
// "!="- not equal
// "!=="- not equal value or not equal type
// ">"- greater than
// "<"- less than
// ">="- greater than or equal to
// "<="- less than or equal to
// "?"- ternary operator
// "&&"- logical and
// "||"- logical or
// "!"- logical not
// "typeof"- Returns the type of a variable
// "instanceof"- Returns true if an object is an instance of an object type
// Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

// (<<=)	operator (x <<= y)	same as (x = x << y)
// (>>=)	operator (x >>= y)	same as (x = x >> y)
// (>>>=)	operator (x >>>= y)	same as (x = x >>> y)
// (&=)	operator (x &= y)	same as (x = x & y)
// (^=)	operator (x^= y)	same as (x = x ^ y)
// (|=)	opeartor (x |= y)	same as (x = x | y)
// (**=)	operatr (x **= y)	(x = x ** y)

// JavaScript variables can hold many data types: numbers, strings, objects and more
// A string (or a text string) is a series of characters like "John Doe". Strings are written with quotes. You can use single or double quotes.
// JavaScript has only one type of numbers. Numbers can be written with, or without decimals.
// Extra large or extra small numbers can be written with scientific (exponential) notation.
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
// JavaScript arrays are written with square brackets. Array items are separated by commas.
// Array indexes are zero-based, which means the first item is [0], second is [1], and so on. You will learn more about arrays later in this tutorial.
// JavaScript objects are written with curly braces. Object properties are written as name:value pairs, separated by commas.
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// An empty value has nothing to do with undefined. An empty string has both a legal value and a type.
// In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can empty an object by setting it to null.
// You can also empty an object by setting it to undefined.
// A primitive data value is a single simple data value with no additional properties and methods.
// The typeof operator can return one of these primitive types:
// string
// number
// boolean
// undefined
// The typeof operator can return one of two complex types:
// function
// object
// The typeof operator returns object for both objects, arrays, and null. The typeof operator does not return object for functions.

