// const twoSum = function (nums, target){
//     let rightSum=[]
//     for(let i=0; i<nums.length; i++){
//         const difference = target - nums[i]
//     }
// }
// twoSum([2,7,11,15] , 9)




const twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (diff in map) {
            return [map[diff], i]
        }


        map[nums[i]] = i;
    }
}


console.log(twoSum([2,7,11,15], 9));