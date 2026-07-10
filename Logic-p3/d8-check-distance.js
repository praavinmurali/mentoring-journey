function checkDistances(s, distance) {

    for (let i = 0; i < s.length; i++) {

        let first = s.indexOf(s[i]);   // First position
        let last = s.lastIndexOf(s[i]); // Last position

        let gap = last - first - 1;    // Letters between them

        let index = s[i].charCodeAt(0) - 97; // a=0, b=1, c=2...

        if (gap !== distance[index]) {
            return false;
        }
    }

    return true;
}

const s = "abaccb";

const distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(checkDistances(s, distance));