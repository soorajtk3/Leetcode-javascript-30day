/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];
    for(i=0;i<arr.length;i++){
        let values = fn(arr[i],i)
        returnedArray.push(values)
    }
    return returnedArray;
};
const arr=[1,2,3]
var arrReduce=(num,i)=>{
    if(i){
        console.log(i);
        return num+i;
    }
return num+1
}

var res = map(arr,arrReduce)

console.log(res);