"use strict"
function test1(c){
	var res= true;
	if(c%2 == 0){
      console.log("even")
	}
	else{
       console.log("odd")
       res = false;
	}
	return res;	
}

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);


for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}   

