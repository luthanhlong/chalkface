class ContactForm {
  constructor(Id) {   
    var dv = document.getElementById(Id);
    getDataFromJsonFile (DomainPath + "Data/ContactForm.json",
      function(sData){
        var dContact = JSON.parse(sData)[0].ContactForm;
        var frm = document.createElement("form"); 
        for(var key in dContact.Attributes){frm[key]=dContact.Attributes[key];}     
        dContact.Children.forEach(child => {
          var dvChild = document.createElement("div");
          var lbl = document.createElement("label");          
          var img = document.createElement('img'), input;       
          img.src = DomainPath + child.ImageLabel;
          switch(child.Type){
            default:                  
              input = document.createElement('input');
              input['name']=child.InputName;              
              input['placeholder']=child.InputPlaceholder;
              input['type']=child.InputType;
              input['required']=child.InputRequired;
              if(child.InputPattern!=""){input['pattern']=child.InputPattern};
              break;
            case "Content":
              input = document.createElement('textarea');
              input['name']=child.InputName;
              input['required']=child.InputRequired;
              input['placeholder']=child.InputPlaceholder;
              break;
          }    
          lbl.appendChild(img);
          dvChild.appendChild(lbl);
          dvChild.appendChild(input);          
          frm.appendChild(dvChild); 
      });
      var btn = document.createElement("button");
        btn["type"]="submit";
        btn["value"] = "Gửi";
        btn.innerText = "Gửi";
        frm.appendChild(btn);
      var dvMsg = document.createElement("div");
      dvMsg.id = dContact.MsgAttributes["id"];
      dvMsg.name = dContact.MsgAttributes["name"];
      dvMsg.className = dContact.MsgAttributes["class"];
      dvMsg.innerHTML = dContact.MsgAttributes["innerHTML"];
      dvMsg.style =  dContact.MsgAttributes["style"];      
      var ifrm = document.createElement("iframe");
      for(var key in dContact.IframeAttributes){ifrm[key]=dContact.IframeAttributes[key];}       
      var submitted = false;
      frm.onsubmit = function(){submitted=true}      
      ifrm.onload = function(){
        frm.style.display = (submitted)?'none':'block';
        dvMsg.style.display = (submitted)?'block':'none';              
      }
      dv.appendChild(frm);dv.appendChild(dvMsg);dv.appendChild(ifrm);      
    })
  }  
}
