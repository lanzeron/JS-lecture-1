
/*var event = prompt("I meet you", "enter where");
var name = 'yura';
var time = '6 00';
var place = 'lviv';
var sentense = name + ' ' + time + " " + place + ' '+event;
console.log(sentense);*/



/*var x2 = prompt ("please enter coordinate X", "0" );
var y2 = prompt ("please enter coordinate Y", "0" );
var x1 = 5;
var y1 = 6;
var result = Math.sqrt((x1 - x2)*(x1 - x2) + (y1-y2)+(y1-y2));
alert(result);*/

/*var output = '';
for (var i = 0; i < 10; i++) {
	output = output + '#';
	console.log(output)
	
};*/

/*task4*/

var i=0;
while (i<10) {
	i++
	if (i%2==0){
		console.log(" # # # #");
	} else {console.log("# # # # ")};


};

/*task 5*/

var y = Number(Math.random()*100);
var number = y-(y%1);
do {var x = prompt ('please try to guess number from 1 to 100', '0');
if (x>number){
		alert("sorry our number is lower, try again");
	} else if (x<number) {alert ("sorry our number is higher, try again")}
}
while (x!=number);
alert ('You are win!!!')
console.log(number);




	