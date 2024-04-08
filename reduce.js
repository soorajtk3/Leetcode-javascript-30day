/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var finalResult = init; 

    for (var i = 0; i < nums.length; i++) {

        finalResult = fn(nums[i], finalResult);
    }

    return finalResult;
};

var arr = [1, 2, 3, 4];

var arrReduce = (init,num ) => {
    var res = num + init;
    return res;
};

let res = reduce(arr, arrReduce, 0);
console.log(res);
