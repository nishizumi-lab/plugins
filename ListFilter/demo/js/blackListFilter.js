function blackListFilter(){
    const startTime = Date.now();

    let outputData = document.getElementById('outputArea').value;
    let outputArray = outputData.split("\n").filter(Boolean);

    let blackListData = document.getElementById('blacklistArea').value;
    let blackListArray = blackListData.split("\n").filter(Boolean);
    let blacklistedArray = [];
    let unblacklistedArray = [];
    let blacklistedFlag = 0;
    let statusArea2 = document.getElementById("statusArea2");
    let j = 0;

    for(const outputStr of outputArray){
        blacklistedFlag = 0;
        statusArea2.innerHTML = '2️⃣ブラックリストで抽出:' + String(j+1) + '/' + String(outputArray.length) + '件完了';
        for(const blackStr of blackListArray){
            if(outputStr.indexOf(blackStr) > -1){
                blacklistedArray.push(outputStr);
                blacklistedFlag = 1;
            }
        }
        if(blacklistedFlag == 0){
            unblacklistedArray.push(outputStr);
        }      
        j++;
    }

    let blacklistedArea = document.getElementById('blacklistedArea');
    blacklistedArea.innerHTML = "";

    let unblacklistedArea = document.getElementById('unblacklistedArea');
    unblacklistedArea.innerHTML = "";

    for(const blacklistedStr of blacklistedArray){
        blacklistedArea.innerHTML += blacklistedStr + "\n";
    }

    for(const unblacklistedStr of unblacklistedArray){
        unblacklistedArea.innerHTML += unblacklistedStr + "\n";
    }

    const endTime = Date.now();
    statusArea2.innerHTML += ', 処理時間:' + String(endTime - startTime) + "[msec]\n";
}