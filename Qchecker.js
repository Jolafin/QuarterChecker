 let a = 444;
let b = 100;
let result = 0;

result = a + b

//IF statement 
if (b == a) {
    console.log("no action needed")
}
else {
    while (a != b) {
        if (a > 0) {
           console.log("a is " + a)
            a = a - 100
             console.log("a is " + a)
             


       }
        else {
           console.log("no further subtraction is possible")
           break
       }

    }
}


// console.log("condition met a= " + a "b = " + b) }



// While
while(b>=a)
{
    console.log("b is "+ b)
    b= b-200
}

//For 

console.log("result is " + result)