function nextGreatestLetter(letters, target) {

    for (let letter of letters) {

        if (letter > target) {
            return letter;
        }

    }

    return letters[0];

}

console.log(nextGreatestLetter(["c", "f", "j"], "c"));