var submitted = false;
getDataFromJsonFile (DomainPath + "Data/Com.json",
    function(sData){
      var dContact = JSON.parse(sData)[1].ContactForm;
      var frm = document.getElementById('mG61Hd');
      if(frm!=undefined) {
        for(var key in dContact.Attributes){frm[key]=dContact.Attributes[key];}        
        frm.onsubmit = function(){submitted=true}      
        dContact.Children.forEach(child => {
          var dv = document.createElement("div");
          dv.style.width = "100%";
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
          dv.appendChild(lbl);
          dv.appendChild(input);          
          frm.appendChild(dv); 
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
        frm.parentElement.appendChild(dvMsg)
        var ifrm = document.createElement("iframe");
        for(var key in dContact.IframeAttributes){ifrm[key]=dContact.IframeAttributes[key];}       
        ifrm.onload = function(){
          frm.style.display = (submitted)?'none':'block';
          dvMsg.style.display = (submitted)?'block':'none';              
        }
        frm.parentElement.appendChild(ifrm);
      }
    }
)