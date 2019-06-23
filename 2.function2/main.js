function palindrome(message){
    var len = message.length;
    var str = "";
    for(var i=len-1; i>=0;i--){
        str+=message[i];
    }
    return (str == message);
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
