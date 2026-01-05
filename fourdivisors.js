function sumFourDivisors(nums) {
    let ans = 0;

    for (let num of nums) {
        let d = -1;

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                d = i;
                break;
            }
        }

        if (d === -1) continue;

        let other = num / d;


        if (d !== other && isPrime(d) && isPrime(other)) {
            ans += 1 + d + other + num;
        }


        else if (d === other) {
            let p = Math.sqrt(d);
            if (Number.isInteger(p) && isPrime(p)) {
                ans += 1 + p + d + num;
            }
        }
    }

    return ans;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}