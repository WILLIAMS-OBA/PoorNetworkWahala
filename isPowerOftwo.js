function isPowerOfTwo(number) {
    while (number > 1) {
        if (number % 2 != 0) {
            return false;
        }

        number = number / 2;
    }

    return number == 1;
}

console.log(isPowerOfTwo(16));
