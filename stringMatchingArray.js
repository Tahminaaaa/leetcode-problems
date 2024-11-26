function stringMatching (words){
    let result = []
    for(let i=0; i<words.length; i++){
        let word = words[i]
        for(let a=0; a<words.length; a++){
            let word2 = words[a]
            if(word2!==word && word2.includes(word)){
                result.push(word);
                break
            } 
        }

    }
return result;

}
const words = ["leetcoder","leetcode","od","hamlet","am"]
stringMatching(words);
