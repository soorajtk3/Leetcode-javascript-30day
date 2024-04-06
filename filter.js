/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let returnedArray = [];
      for(i=0;i<arr.length;i++){
          let values = fn(arr[i],i)
          if(values){
          returnedArray.push(arr[i])

          }
      }
      return returnedArray;
  };
  const arr=[0,10,20,30]
  var arrReduce=(num,i)=>{
   if(num>10)return true;
 return i===0;

  }
  
  let res =  filter(arr,arrReduce)
  console.log(res);