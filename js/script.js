"use strict";
(function() {
    /*task4*/
    var i = 0;
    while (i < 10) {
        i++;
        if (i % 2 === 0) {
            console.log(" # # # #");
        } else {
            console.log("# # # # ");
        }
    }
    /*task 5*/
    var y = Math.round(Math.random() * 100);
    do {
        var x = prompt("please try to guess number from 1 to 100", "0");
        if (x > y) {
            alert("sorry our number is lower, try again");
        } else if (x < y) {
            alert("sorry our number is higher, try again");
        }
    }
    while (x != y);
    alert("You are win!!");
})();