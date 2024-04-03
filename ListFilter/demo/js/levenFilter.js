//文字列の類似度チェック
levenshteinDistance = function(str1, str2) {
    let r, c, cost,
        d = [];
   
    for (r=0; r<=str1.length; r++) {
      d[r] = [r];
    }
    for (c=0; c<=str2.length; c++) {
      d[0][c] = c;
    }
    for (r=1; r<=str1.length; r++) {
      for (c=1; c<=str2.length; c++) {
        cost = str1.charCodeAt(r-1) == str2.charCodeAt(c-1) ? 0: 1;
        d[r][c] = Math.min(d[r-1][c]+1, d[r][c-1]+1, d[r-1][c-1]+cost);
      }
    }
    return d[str1.length][str2.length];
}

function levenFilter(){
    const startTime = Date.now();

    let unblacklistedData = document.getElementById('unblacklistedArea').value;
    let unblacklistedArray = unblacklistedData.split("\n").filter(Boolean);

    let blackListData = document.getElementById('blacklistArea').value;
    let blackListArray = blackListData.split("\n").filter(Boolean);
    let statusArea3 = document.getElementById("statusArea3");

    let dangerArray = [];
    let safetyArray = [];
    let dangerFlag = 0;

    let j = 0;
    let threshold = 0;
    let score = 0;
    let level = document.getElementById('level').value;

    if(level == '厳しい'){
        threshold = 10;
    }
    else if(level == '普通'){
        threshold = 5;
    }
    else if(level == '緩い'){
        threshold = 2;
    }

    for(const unblacklistedStr of unblacklistedArray){
        dangerFlag = 0;
        statusArea3.innerHTML = '3️⃣ブラックリストとの類似度計算:' + String(j+1) + '/' + String(unblacklistedArray.length) + '件完了';
        for(const blackStr of blackListArray){
            score = levenshteinDistance(blackStr, unblacklistedStr);
            console.log("---------");
            console.log(blackStr);
            console.log(unblacklistedStr);            
            console.log(score);
            console.log(threshold);
            if(score <= threshold){
                dangerFlag = 1;
            }
        }
        console.log("---");
        console.log(dangerFlag);
        if(dangerFlag == 1){
            dangerArray.push(unblacklistedStr);
        }
        else{
            safetyArray.push(unblacklistedStr);           
        }      
        j++;
    }
    let safetyArea = document.getElementById('safetyArea');
    safetyArea.innerHTML = "";

    let dangerArea = document.getElementById('dangerArea');
    dangerArea.innerHTML = "";

    for(const safetyStr of safetyArray){
        safetyArea.innerHTML += safetyStr + "\n";
    }

    for(const dangerStr of dangerArray){
        dangerArea.innerHTML += dangerStr + "\n";
    }

    const endTime = Date.now();
    statusArea3.innerHTML += ', 処理時間:' + String(endTime - startTime) + "[msec]\n";
}
