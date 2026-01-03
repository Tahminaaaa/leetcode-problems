function repeatedNTimes(nums) {
    const count = new Map();

    for (let num of nums) {
        if (count.has(num)) {
            return num;
        } else {
            count.set(num, 1);
        }
    }
}


console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));