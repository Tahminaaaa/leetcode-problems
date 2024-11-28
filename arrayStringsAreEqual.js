var arrayStringsAreEqual = function(word1, word2) {
    
return word1.join('')==word2.join('')
};



function arrayStringsAreEqual2(word1, word2) {
    
    let str1 = "";
    for (let i = 0; i < word1.length; i++) {
        str1 += word1[i];
    }

    
    let str2 = "";
    for (let i = 0; i < word2.length; i++) {
        str2 += word2[i];
    }

    
    return str1 === str2;
}
const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
const result = arrayStringsAreEqual(word1, word2);
console.log (result)