// Initialize tools
window.addEventListener("load", function(){
    initTabTools();
});

//Set up Tab Tools
function initTabTools(){
    var tabs = document.getElementsByClassName("Tabs-Container")[0].getElementsByClassName("Tab"),
        tabNames = document.getElementsByClassName("Tabs-Container")[0].getElementsByClassName("Tab-Name"),
        bar = document.getElementsByClassName("Tabs-Container")[0].getElementsByClassName("Tab-Bar")[0];
        for(var i=0; i<tabs.length; i++){
          var tab = tabs[i];
              tab.style.display = (i==0)? 'block':'none';
          var btn = document.createElement("button");
            btn.className = (i==0)?"Tab-Button Tab-Button-Active":"Tab-Button";
            btn.innerText = tabNames[i].innerText; 
            btn.onclick =function(){openTab(event)};
            btn["tabIndex"] = i;
            bar.appendChild(btn);
        } 
}
function openTab(evt) {
    var tabs = document.getElementsByClassName("Tabs-Container")[0].getElementsByClassName("Tab"),
        btns = document.getElementsByClassName("Tabs-Container")[0].getElementsByClassName("Tab-Button");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      btns[i].className = "Tab-Button";
    } 
    var btn = evt.currentTarget, tab = tabs[btn["tabIndex"]];
    tab.style.display = "block"; tab.focus
    btn.className +=" Tab-Button-Active"; 
}