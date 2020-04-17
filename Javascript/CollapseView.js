class CollapseView {
    constructor(Id) {
      var dv = document.getElementById(Id);
      this.contents = dv.getElementsByClassName("content");
      for(var i=0; i<this.contents.length; i++){
        var content = this.contents[i];            
        var btn = document.createElement("button");
          btn.className = "header";
          btn.innerText = content.getAttribute("header"); 
          btn.onclick =function(){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }           
          };
          dv.insertBefore(btn,content);
      } 
    }
}

