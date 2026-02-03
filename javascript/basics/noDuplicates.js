const arr1 = [1, 2, 2, 5, 7, 24, 95, 5 , 8, 2];
function noDuplicates(arr){
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(!arr2.includes(arr[i])){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
const f_arr = noDuplicates(arr1);
console.log(f_arr);