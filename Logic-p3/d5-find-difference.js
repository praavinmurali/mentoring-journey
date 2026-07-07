export function findDifference(nums1, nums2) {

    let answer1 = [];
    let answer2 = [];

    // Find numbers that are in nums1 but not in nums2
    for (let i = 0; i < nums1.length; i++) {

        if (!nums2.includes(nums1[i]) && !answer1.includes(nums1[i])) {
            answer1.push(nums1[i]);
        }

    }

    // Find numbers that are in nums2 but not in nums1
    for (let i = 0; i < nums2.length; i++) {

        if (!nums1.includes(nums2[i]) && !answer2.includes(nums2[i])) {
            answer2.push(nums2[i]);
        }

    }

    return [answer1, answer2];
}