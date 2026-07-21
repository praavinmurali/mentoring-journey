/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
export const arithmeticTriplets = function(nums, diff) {

    let count = 0;

    // Check every group of 3 numbers
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            for (let k = j + 1; k < nums.length; k++) {

                if (
                    nums[j] - nums[i] === diff &&
                    nums[k] - nums[j] === diff
                ) {
                    count++;
                }

            }

        }

    }

    return count;
};