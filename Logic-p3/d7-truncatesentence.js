function truncateSentence(s, k) {
    let words = s.split(" ");      // Split the sentence into words
    let result = words.slice(0, k); // Take the first k words
    return result.join(" ");        // Join the words back into a sentence
}

console.log(truncateSentence("Hello how are you Contestant", 4));