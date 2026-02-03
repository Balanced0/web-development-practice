const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd_sum = 0;
let odd_counter = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 !== 0){
        odd_sum = odd_sum + arr[i];
        odd_counter++;
        console.log(arr[i]);
    }
}
let odd_average = odd_sum/odd_counter;
console.log(odd_average);