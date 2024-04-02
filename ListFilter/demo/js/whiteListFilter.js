function whiteListFilter(){
    const startTime = Date.now();

    let inputData = document.getElementById('inputArea').value;
    let whiteListData = document.getElementById('whiteListArea').value;
    let inputArray = inputData.split("\n").filter(Boolean);;
    let whiteListArray = whiteListData.split("\n").filter(Boolean);;
    let statusArea = document.getElementById("statusArea");

    let whiteListLength = whiteListArray.length;
    let i = 0;
    let j = 0;

    for(const whiteStr of whiteListArray){
        i = 0;
        statusArea.innerHTML = '1️⃣ホワイトリストで除外:' + String(j+1) + '/' + String(whiteListLength) + '件完了';
        for(const inputStr of inputArray){
            if(inputStr.indexOf(whiteStr) > -1){
                inputArray[i] = "DELETE";
            }
            i++;
        }
        j++;        
    }

    let outputArray = inputArray;
    let output = document.getElementById('outputArea');
    output.innerHTML = "";

    for(const outputStr of outputArray){
        output.innerHTML += outputStr + "\n";
    }

    const endTime = Date.now();
    statusArea.innerHTML += ', 処理時間:' + String(endTime - startTime) + "[msec]\n";
}
