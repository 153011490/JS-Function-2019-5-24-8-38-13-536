function alphabetSort(message){
  var keys = Object.keys(message);
  keys.sort();
  for(var i = 0, l = keys.length; i < l; i++) {
    return (keys[i] + ' ' + message[keys[i]]);
  }
}
alphabetSort('hello'); // should return 'ehllo'
