class TabView {
    constructor(Id) {
      var dv = document.getElementById(Id),
          dvBar = this.dvBar = document.createElement("div");
      dvBar.className = "Tab-Bar";
      dv.insertBefore(dvBar,dv.firstChild);
      var tabs = this.tabs = dv.getElementsByClassName("Tab");
      this.buttons = []; 
      var me = this;
      for(var i=0; i<tabs.length; i++){
        var tab = tabs[i];
            tab.style.display = (i==0)? 'block':'none';
        var btn = document.createElement("button");
          btn.className = (i==0)?"Tab-Button Tab-Button-Active":"Tab-Button";
          btn.innerText = tab.getAttribute("tabname"); 
          btn.onclick =function(){me.openTab(event)};
          btn["tabIndex"] = i;
          this.buttons.push(btn);
          dvBar.appendChild(btn);
      } 
    }
    openTab(evt) {
        var tabs = this.tabs,
            btns = this.buttons;
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].style.display = "none";
          btns[i].className = "Tab-Button";
        } 
        var btn = evt.currentTarget, tab = tabs[btn["tabIndex"]];
        tab.style.display = "block"; 
        btn.className +=" Tab-Button-Active"; 
        btn.scrollIntoView();
    }  
}

