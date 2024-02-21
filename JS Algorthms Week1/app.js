
// JS Algorithms_Basic
// 1. Print 1 - 135
for ( var i=1 ; i <= 135 ; i++){
    console.log(i)
}
// 2. Print Odd Numbers 1 - 135

 var second = document.getElementById('second')
for ( var i =1 ; i <= 135 ; i++){
    if( i % 2 != 0){
        console.log(i)
    }
}
// 3. Sum of Printed Numbers

  let sum = 0;
for (let i = 1; i <= 135; i++) {
  
  sum += i;
  console.log(`Number: ${i} | Sum: ${sum}`);
}


//4. Print the elements of an array
const x = [ 1,4,2,13]
for(let i=0; i<x.length; i++)
console.log(x[i])

// 5. Find Max
let numbers = [ 4, 8, 44, - 1 , 0]
let max = numbers[0];
for ( let i = 0 ; i<numbers.length ; i++ ){
    if (numbers[i] > max){
        max = numbers[i]
    }
}
console.log(max)

// 6. Get Average

let simple = [ 3, 6, 9, 12]
let sum = 0 
for ( let i=0 ; i < simple.length ; i++){
    sum += simple[i]
    var avg = simple.length
}
var rslt = sum/avg;
console.log(rslt)

//7. Eliminate the Negatives

var ex = [4, 0, -4, 1, -11]
for( i=0; i<ex.length; i++){
    if ( ex[i] < 0 ){
        ex[i]=0
    }
}
console.log(ex)

//8. Number to String
var eight = [ 11, 22, -33, 44, -55]
for( i=0 ; i<eight.length ; i++){
    if(eight[i]<0)
    eight[i]="turing"
}
console.log(eight)
