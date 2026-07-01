let input = prompt("Enter numbers separated by commas:");

let nums = input.split(",").map(Number);

function containsDuplicate(nums) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] == nums[j]) {
                return true;
            }

        }

    }

    return false;
}

console.log(containsDuplicate(nums));