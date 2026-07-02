function moveZeroes(nums) {

    let index = 0;

    // First loop: Move all non-zero numbers to the front
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {

            nums[index] = nums[i];
            index++;

        }

    }

    // Second loop: Fill the remaining places with 0
    for (let i = index; i < nums.length; i++) {

        nums[i] = 0;

    }

    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));