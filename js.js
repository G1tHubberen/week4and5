function add(n1, n2) {
    return n1 + n2;
}

const sub = function(n1, n2){
    return n1 - n2;
}

const cb = function(n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
}

console.log(cb(3,"hh",add));

//Result from the two numbers: 3+hh=3hh


function addVersion2(n1, n2, ...rest) {
    return n1 + n2 + rest.reduce((acc, cur) => acc + cur);
}

console.log(addVersion2(1,2,3,4,5,6));

/*n1 + n2 equals 1 + 2, which is 3.
The rest array contains [3, 4, 5, 6].The reduce method iterates
through the rest array and adds all the elements to the accumulator.
3 + 3 equals 6. 6 + 4 equals 10. 10 + 5 equals 15. 15 + 6 equals 21.*/
