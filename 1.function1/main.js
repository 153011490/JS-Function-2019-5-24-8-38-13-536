function reverseString(message){
  var result='';
  for(var i=message.length-1;i>=0;i--){
    result+=message.charAt(i);
  }
  return result;
}
reverseString('hello'); // should return 'olleh'
