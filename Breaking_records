//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
    // Write your code here
    let minScore = scores[0];
    let maxScore = scores[0];
    let counterMin = 0;
    let counterMax = 0;    
    
    for(let i=0; i <= scores.length; i++){
        if(minScore > scores[i]){
            minScore = scores[i];
            counterMin++;
        }
        if(maxScore < scores[i]){
            maxScore = scores[i];
            counterMax++;
        }        
    }    
    return [counterMax, counterMin]
}
