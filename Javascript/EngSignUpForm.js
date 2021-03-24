class EngSignUpForm {
  constructor(Id) {   
    var dv = document.getElementById(Id);
    getDataFromJsonFile (DomainPath + "Data/ContactForm.json",
      function(sData){
        var dContact = JSON.parse(sData)[2].EngSignUpForm;
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
            case "Place":              
              input = new CheckboxList(child.InputName,child.Label,child.InputData,child.InputPlaceholder);             
              input.inputValue['required'] = child.InputRequired;
              break;
            case "Course":
              var sl = document.createElement('select');  
              var opt0 = document.createElement("option"); opt0.value =""; opt0.innerText = "Chọn khóa học";    
              sl.add(opt0);              
              var opts = child.InputData;
              opts.forEach(ech=>{               
                var opt = document.createElement("option");
                opt.value = opt.innerText = ech;
                sl.add(opt);
              });
              input = sl;         
              input['name']=child.InputName;              
              input['required']=child.InputRequired;
              break;
            case "Weekday":              
              input = new CheckboxList(child.InputName,child.Label,child.InputData);             
              input.inputValue["required"] = child.InputRequired;
              break;
            case "Time":              
              input = new CheckboxList(child.InputName,child.Label,child.InputData,child.InputPlaceholder);             
              input.inputValue["required"] = child.InputRequired;
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
      }
      dv.appendChild(frm);dv.appendChild(dvMsg);dv.appendChild(ifrm);      
    })
  }  
}
