const sumAll = function(intA, intB) {
    if (!Number.isInteger(intA) || !Number.isInteger(intB)) return "ERROR";
    if (intA < 0 || intB < 0) return "ERROR";
    let sum =0;
    if(intB>intA) {
        do {
            sum += intB;
            intB--; 
        } while(intB>=intA)
    } else {
        do {
            sum += intA;
            intA--; 
        } while(intA>=intB)
    }
    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
