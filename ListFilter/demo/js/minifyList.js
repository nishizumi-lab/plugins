function minifyList(){

    const startTime = Date.now();
    
    let inputData = document.getElementById('inputArea').value;
    let inputArray = inputData.split("\n").filter(Boolean);;
    let inputArray2 = inputArray;
    let i = 0;

    for(const inputStr of inputArray){

        statusArea.innerHTML = '圧縮処理:' + String(i+1) + '/' + String(inputArray.length) + '件完了';
        for(const inputStr2 of inputArray2){
            if(inputStr.indexOf(inputStr2) > -1){
                if(inputStr.length > inputStr2.length)
                inputArray[i] = "DELETE";
            }
            
        }
        i++;     
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
