"use strict";
(function() {
    var x2 = prompt("please enter coordinate X", "0");
    var y2 = prompt("please enter coordinate Y", "0");
    var x1 = 5;
    var y1 = 6;
    var result = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) + (y1 - y2));
    alert(result);
})();