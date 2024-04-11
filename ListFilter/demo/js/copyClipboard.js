function copyClipboard(targetID) {
    let text = document.getElementById(targetID).value;
    navigator.clipboard.writeText(text);
}
