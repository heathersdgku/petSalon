//write a js function that takes a list of numbers (array) as parameter and returns the sum of all the numbers.

numbers = [1,2,3,4,5,6,7,8,9,10];

function add(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    console.log(sum);
}
