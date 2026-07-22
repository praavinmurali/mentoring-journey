function findWords(words) {

    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";

    let answer = [];

    for (let word of words) {

        let text = word.toLowerCase();

        if (check(text, row1) ||
            check(text, row2) ||
            check(text, row3)) {

            answer.push(word);
        }
    }

    return answer;
}

function check(word, row) {

    for (let letter of word) {

        if (!row.includes(letter)) {
            return false;
        }
    }

    return true;
}

export default findWords;