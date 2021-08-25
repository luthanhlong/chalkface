const config = {
    apiKey: "AIzaSyDtq_fJTCBpugeqttv96375BqUVX-2amms",
    authDomain: "public-b9222.firebaseapp.com",
    databaseURL: "https://public-b9222-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "public-b9222",
    storageBucket: "public-b9222.appspot.com",
    messagingSenderId: "1096163310602",
    appId: "1:1096163310602:web:b4532f97dd021f355db3f3",
    measurementId: "G-KY5J3ZL9EE"
 };
firebase.initializeApp(config);var database = firebase.database();
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
class CheckboxList {
    constructor (Id, Label, Items, OtherItem){
      var dv = document.createElement("div"), dvlbl = document.createElement("span");
      dv.id = "dv" + Id;     
      dvlbl.innerText = Label; dv.appendChild(dvlbl); dv.appendChild(document.createElement("br"));
      Items.forEach(elem => {
        var cb = document.createElement("input"), lbl=document.createElement("span");
        cb["type"] = "checkbox";cb["value"]=elem; cb.className = "checkbox"; lbl.innerText = elem;
        cb.onchange = function(event){dv.setValue();}   
        var dvItem = document.createElement("div"); dvItem.className = "item";          
        dvItem.appendChild(cb);   
        dvItem.appendChild(lbl); 
        dv.appendChild(dvItem);          
        dv.appendChild(document.createElement("br"));
      });
      if(OtherItem){
        var cb = document.createElement("input"), ipTxt = document.createElement("input");
        cb["type"] = "checkbox";cb["value"]=""; cb.className = "checkbox";
        ipTxt["type"]="text"; ipTxt.className = "text";
        ipTxt.disabled = true; ipTxt["placeholder"]= OtherItem;
        ipTxt.onchange = function(event){
            var me = event.target;
            if(me.value!=""){
                cb.value= OtherItem + ": " + me.value;
            }
            else{
                cb.value = "";
                cb.checked = false;
                me.disabled = true;
            }          
            dv.setValue();
        }        
        cb.onchange = function(event){
            var me = event.target;  
            if(me.checked){
                ipTxt.disabled = false;
                ipTxt.focus();
            }
            else{
                ipTxt.disabled = true;
                ipTxt.value = "";
                cb.value="";
            }            
            dv.setValue();
        }       
        var dvItem = document.createElement("div"); dvItem.className = "item";          
        dvItem.appendChild(cb);   
        dvItem.appendChild(ipTxt); 
        dv.appendChild(dvItem);       
        dv.appendChild(document.createElement("br"));
      }
      var inptValue = document.createElement("input");
      inptValue["type"]="hidden";
      inptValue["name"] = Id;
      dv.inputValue = inptValue;      
      dv.appendChild(inptValue); 
      dv.setValue = function(){
        var dValue = new Array();
        var elems = this.getElementsByTagName("input");
        for (var i=0;i<elems.length;i++){
          var ech = elems[i]; 
          if(ech.type=="checkbox" && ech.checked==true && ech.value!=""){
            dValue.push(ech.value);
          }
        }
        this.inputValue.value = dValue;
      } 
      dv.getValue = function(){return this.inputValue.value;} ;  
      dv.className = "CheckBoxList";      
      return dv;
    }
}
class DropdownSelect {
    constructor (Label, Items){
        var sl = document.createElement('select');  
        var opt0 = document.createElement("option"); opt0.value =""; opt0.innerText = Label;    
        sl.add(opt0);              
        var opts = Items;
        opts.forEach(ech=>{               
          var opt = document.createElement("option");
          opt.value = opt.innerText = ech;
          sl.add(opt);
        });       
      return sl;
    }
}
class PostViews {
    constructor (DataName,Id){
        $.each($('a[name]'),function (i, e) {   
            var elem = $('#' + Id);             
            const PostId= $(e).attr("name"); 
            var posts = database.ref(DataName + "/views/" + PostId);
            posts.once('value').then((snapshot) => {
                var post = snapshot.val(), isNew = false;
                if(post == null) { 
                    post= {}; 
                    post.value = 0; 
                    post.url =  window.location.origin + window.location.pathname;   
                    post.id = PostId; 
                    isNew = true; 
                } 
                elem.text(200 + post.value); 
                post.value++; 
                if(window.location.pathname!='/') { 
                    if(isNew) 
                    posts.set(post); 
                    else 
                    posts.child('value').set(post.value); 
                }
                
            }).catch((error) => {
                console.error(error.code + ": " + error.message);
            });  
        });
    }
}
