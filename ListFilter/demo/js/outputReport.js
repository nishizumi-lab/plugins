function outputReport(){

    let inputData = document.getElementById('inputArea').value;
    let outputData = document.getElementById('outputArea').value;
    let deletedData = document.getElementById('deletedArea').value;
    let blacklistedData = document.getElementById('blacklistedArea').value;
    let unblacklistedData = document.getElementById('unblacklistedArea').value;
    let dangerData = document.getElementById('dangerArea').value;
    let safetyData = document.getElementById('safetyArea').value;
    let statusArea = document.getElementById("statusArea").innerText;
    let statusArea2 = document.getElementById("statusArea2").innerText;
    let statusArea3 = document.getElementById("statusArea3").innerText;

    let reportData = "■処理時間\n" + 
    "```\n" + 
    statusArea + "\n" + 
    statusArea2 + "\n" + 
    statusArea3 + 
    "\n```\n\n" +   
    "■入力データ\n" + 
    "```\n" + 
    inputData + 
    "\n```\n\n" + 
    "■実行結果① ホワイトリストと部分一致せず、除外されなかったデータ\n" + 
    "```\n" + 
    outputData +
    "```\n\n" + 
    "■実行結果② ホワイトリストと部分一致し、除外したデータ\n" + 
    "```\n" + 
    deletedData +
    "```\n\n" + 
    "■実行結果③ ブラックリストと部分一致したデータ\n" + 
    "```\n" + 
    blacklistedData + 
    "```\n\n" + 
    "■実行結果④ ブラックリストと部分一致しなかったデータ\n" + 
    "```\n" + 
    unblacklistedData +
    "```\n\n" + 
    "■実行結果⑤ 実行結果④のうちブラックリストとの類似度が高いデータ\n" + 
    "```\n" + 
    dangerData + 
    "```\n\n" + 
    "■実行結果⑥ 実行結果⑤のうちブラックリストとの類似度が低いデータ\n" + 
    "```\n" + 
    safetyData + 
    "\n```";

    let reportArea = document.getElementById('reportArea');
    reportArea.innerHTML = reportData;

}
