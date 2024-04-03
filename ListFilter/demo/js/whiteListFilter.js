function whiteListFilter(){
    const startTime = Date.now();

    let inputData = document.getElementById('inputArea').value;
    let whiteListData = document.getElementById('whiteListArea').value;
    let inputArray = inputData.split("\n").filter(Boolean);;
    let whiteListArray = whiteListData.split("\n").filter(Boolean);;
    let statusArea = document.getElementById("statusArea");
    let deletedArray = [];
    let whiteListLength = whiteListArray.length;
    let i = 0;
    let j = 0;

    for(const whiteStr of whiteListArray){
        i = 0;
        statusArea.innerHTML = '1️⃣ホワイトリストで除外:' + String(j+1) + '/' + String(whiteListLength) + '件完了';
        for(const inputStr of inputArray){
            if(inputStr.indexOf(whiteStr) > -1){
                inputArray[i] = "DELETE";
                deletedArray.push(inputStr);
            }
            i++;
        }
        j++;        
    }

    let outputOption = document.getElementById('outputOption').value;
    let outputArray = [];

    if(outputOption == 'DELETE行は残す'){
        outputArray = inputArray;
    }
    else{
        outputArray = inputArray.filter(n => n !== "DELETE");
    }

    let outputArea = document.getElementById('outputArea');
    let deletedArea = document.getElementById('deletedArea');
    outputArea.innerHTML = "";
    deletedArea.innerHTML = "";

    for(const outputStr of outputArray){
        outputArea.innerHTML += outputStr + "\n";
    }

    for(const deletedStr of deletedArray){
        deletedArea.innerHTML += deletedStr + "\n";
    }

    const endTime = Date.now();
    statusArea.innerHTML += ', 処理時間:' + String(endTime - startTime) + "[msec]\n";
}
