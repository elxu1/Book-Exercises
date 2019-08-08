/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so
*/

var board = "";
var size = 4;

function printLine(offset){
    var line = "";
	for(let i = 0 + offset; i < size + offset; i++){
		line += (i % 2 ? "#": " ");
    }
    return line;
}

for(var j = 0; j < size; j++){
	console.log(printLine(j % 2));
}
