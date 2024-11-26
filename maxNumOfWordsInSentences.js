var mostWordsFound = function(sentences) {
    let maxWordCount = 0;

    for (let i = 0; i < sentences.length; i++) {
        const words = sentences[i].split(' ');
        const wordCount = words.length;
        maxWordCount = Math.max(maxWordCount, wordCount);
    
    }
return maxWordCount;
}

const examples = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
const result=mostWordsFound(examples);
console.log(result)