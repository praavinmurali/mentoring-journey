function sumOddLengthSubarrays(arr) {

    let total = 0;

    // Choose the starting position
    for (let start = 0; start < arr.length; start++) {

        // Choose the ending position
        for (let end = start; end < arr.length; end++) {

            // Find the length
            let length = end - start + 1;

            // Only use odd lengths
            if (length % 2 !== 0) {

                let sum = 0;

                // Add every number
                for (let i = start; i <= end; i++) {

                    sum += arr[i];

                }

                total += sum;

            }

        }

    }

    return total;
}

console.log(sumOddLengthSubarrays([1,4,2,5,3]));