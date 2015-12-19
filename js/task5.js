"use striet";
(function() {
    var y = Number(Math.random() * 100);
    var number = y - (y % 1);
    do {
        var x = prompt('please try to guess number from 1 to 100', '0');
        if (x > number) {
            alert("sorry our number is lower, try again");
        } else if (x < number) {
            alert("sorry our number is higher, try again")
        }
    }
    while (x != number);
    alert('You are win!!!')
    console.log(number);
})();