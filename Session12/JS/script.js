
var degree = prompt("Enter your degree:");
if(degree > 100) 
    console.log("Invalid Value")
else if(degree <= 100 && degree >= 90) 
    console.log("A")
else if(degree < 90 && degree >= 80) 
    console.log("B")
else if(degree < 80 && degree >= 70)
    console.log("C")
else
    console.log("F")
