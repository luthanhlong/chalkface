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
function getDaysBetweenDates(start, end, dayName) {
    var result = [];
    var days = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
    var day = days[dayName.toLowerCase().substr(0,3)];
    // Copy start date
    var current = new Date(start);
    // Shift to next of required days
    current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
    // While less than end date, add dates to result array
    while (current < end) {
      result.push(new Date(+current));
      current.setDate(current.getDate() + 7);
    }
    return result;  
}
class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;
        this.element.addEventListener('touchstart', function(evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);
    }
    onLeft(callback) {
        this.onLeft = callback;
        return this;
    }
    onRight(callback) {
        this.onRight = callback;
        return this;
    }
    onUp(callback) {
        this.onUp = callback;
        return this;
    }
    onDown(callback) {
        this.onDown = callback;
        return this;
    }
    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;
        if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
            if ( this.xDiff > 0 ) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if ( this.yDiff > 0 ) {
                this.onUp();
            } else {
                this.onDown();
            }
        }
        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }
    run() {
        this.element.addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt).bind(this);
        }.bind(this), false);
    }
}
