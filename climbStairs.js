function climbStairs(totalSteps) {
    if (totalSteps <= 2) {
        return totalSteps;
    }

    let first = 1;
    let second = 2;

    for (let i = 3; i <= totalSteps; i++) {
        let third = first + second;

        first = second;
        second = third;
    }

    return second;
}

console.log(climbStairs(5));
