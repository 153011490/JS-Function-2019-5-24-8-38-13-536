function countWords(message){
  var arr=[]; 
  arr = message.toLowerCase().split(" ");
  return arr.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5
