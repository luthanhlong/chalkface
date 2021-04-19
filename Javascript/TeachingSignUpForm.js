class TeachingSignUpForm {
  constructor(Id) {   
    var dv = document.getElementById(Id);
    getDataFromJsonFile (DomainPath + "Data/ContactForm.json",
      function(sData){
        var dContact = JSON.parse(sData)[3].TeachingSignUpForm;
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
              if(child.InputRequired!=""){input['required']=child.InputRequired};
              if(child.InputPattern!=""){input['pattern']=child.InputPattern};
              break;
            case "Provinces":
              input = new ViProvinceDistrictControl('ProvinceId',child.InputName[0],child.InputName[1],true);
              break;
            case "Subjects":              
              input = new CheckboxList(child.InputName,child.Label,child.InputData,"Môn khác: ");            
              input.inputValue["required"] = child.InputRequired;
              break;
            case "Levels":              
              input = new DropdownSelect(child.InputPlaceholder,child.InputData);
              input['name']=child.InputName; 
              input["required"] = child.InputRequired;
              break;
           case "Experience":              
              input = new DropdownSelect(child.InputPlaceholder,child.InputData);
              input['name']=child.InputName; 
              input["required"] = child.InputRequired;
              break;
            case "Expectation":
              input = document.createElement('textarea');
              input['name']=child.InputName; 
              input['placeholder']=child.InputPlaceholder;
              input["required"] = child.InputRequired;
              break;            
          }    
          lbl.appendChild(img);
          dvChild.appendChild(lbl);
          dvChild.appendChild(input);          
          frm.appendChild(dvChild); 
      });
      var btn = document.createElement("button");
        btn["type"]="submit";
        btn["value"] = "Đăng ký";
        btn.innerText = "Đăng ký";
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
        if(submitted){window.scrollTo({ top: 0, behavior: 'smooth' });}            
      }
      dv.appendChild(frm);dv.appendChild(dvMsg);dv.appendChild(ifrm);      
    })
  }  
}
