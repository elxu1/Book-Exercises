/*
Write a function that computes the dominant writing direction in a string of
text. Remember that each script object has a direction property that can be
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that
have a script associated with them. The characterScript and countBy
functions defined earlier in the chapter are probably useful here.
*/

function dominantDirection(text) {
  // Transform text into scripts and remove generic characters
  var textArray = text.split("");
  textArray = textArray.filter(c => characterScript(c.codePointAt()) != null);
  
  // Get the direction of each character
  function charToDirection(c){
    var script = characterScript(c.codePointAt());
    return script.direction;
  }
  var counts = countBy(textArray, charToDirection);
  
  // Decide dominant direction
  return counts.reduce((a, b) => {
    return a.count > b.count ? a.name : b.name;
  }, {name: "", count: 0});
  
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
