//1. Addition

let sum = 0;
    for ( let i=200 ; i<=2700; i++){
        if( (i % 3 === 0  || i % 5 === 0 ) && ( i % 15 !==0)){
        sum += i;}
    }
    console.log(sum)



    //2. Shift the Values

    const simple = [4,5,6,7,8]
    const simleLast = simple.reverse()
    console.log(simleLast)


    //3. FizzBuzz
    let arr = [''];
        for ( var i=1 ; i<=135 ; i++) {
            if ( i % 15 === 0 ){
                arr[i] = "fizzbuzz"
            }
            else if ( i % 5 === 0){
                arr[i] = "buzz"
            }
           else if ( i % 3 ===0){
                arr[i] = "fizz"
            }
            else {
                arr [i] = i
            }
        }
        console.log(arr)

    // 5. Remove the Negative
    const numbers = [ 4, -1, 5, -2, 10, -19]
    for ( i=0; i< numbers.length; i++){
        if (numbers[i] < 0 ){
            delete numbers[i]
        }
    }
    console.log(numbers)

    // 6. Communist Censorship
    let x = [ 'Man', 'I','Love','The','Matrix','Program']
   for ( i =0; i < x.length; i++){
    if ( x[i] === 'Program'){
        x[i]='*******'
    }
   }
   console.log(x)