const acronymWord = function(words, s){
    let acWord = "";

    for(let i=0; i<words.length; i++){
        acWord+=words[i][0]
    }
    return acWord === s;
}
acronymWord(["alice","bob","charlie"],"abc")