javascript
export function prefixCount(words, pref) {
  let count = 0;

  for (let word of words) {
    if (word.startsWith(pref)) {
      count++;
    }
  }

  return count;
}

console.log(prefixCount(["pay","attention","practice","attend"], "at"));