var DomainPath = "/";
function getDataFromJsonFile(FilePath,Callback){
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
function clearSelectOptions(SelectElement, MinIndex) { 
    var i, L = SelectElement.options.length - 1;
    for (i = L; i >= MinIndex; i--) {
        SelectElement.remove(i);
    }
}
function copyUrltoClipboard(){
    var dummy = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}
function shareLink(appname){
    var url= window.location.href, targetUrl="";
    switch(appname){
        case "Facebook":
            targetUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
            break;
       case "Twitter":
            targetUrl = "http://www.twitter.com/share?url=" + url;
            break;  
        case "Pinterest":
            targetUrl = "http://pinterest.com/pin/create/button/?url=" + url;
            break;
        case "Email":
            targetUrl = "mailto:?Subject=BÀI VIẾT HAY &Body=Đây là bài viết hay " + url;
            break;
    }
    window.open(targetUrl,"_blank");
}
function openBox(BoxId,IsOpen){        
    var bx = document.getElementById(BoxId);
    bx.style.display=(IsOpen)?'block':'none';         
}

