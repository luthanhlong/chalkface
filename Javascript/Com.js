getDataFromJsonFile(FilePath,Callback){
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", FilePath, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            Callback(rawFile.responseText);
        }
    }
    rawFile.send(null); 
}