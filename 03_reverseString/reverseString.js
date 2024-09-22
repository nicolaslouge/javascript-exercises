const reverseString = function(string) {
    let stringTab = string.split('');
    let reversedString = "";
    for(let i=0; i < stringTab.length;i++) {
        reversedString += stringTab[stringTab.length-1-i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
