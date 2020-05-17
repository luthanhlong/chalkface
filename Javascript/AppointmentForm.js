class AppointmentForm {
  constructor(Id) {   
    var dv = document.getElementById(Id);
    getDataFromJsonFile (DomainPath + "Data/ContactForm.json",
      function(sData){
        var dContact = JSON.parse(sData)[1].AppointmentForm;
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
            case "Date":
              var sl = document.createElement('select');  
              var opt0 = document.createElement("option"); opt0.value =""; opt0.innerText = "Chọn ngày tham gia";    
              sl.add(opt0);
              var dayName="mon";
              var startDate = new Date();
              var endDate = new Date().setMonth(startDate.getMonth() + 1); 
              var dates = getDaysBetweenDates(startDate, endDate, dayName);
              dates.forEach(ech=>{               
                var opt = document.createElement("option"); 
                var iDay = ech.getDate(), iMonth = ech.getMonth() + 1, iYear = ech.getFullYear();
                var sDate = (iDay<10? ("0"+ iDay):iDay) 
                          + "-" + (iMonth<10?("0" + iMonth):iMonth) 
                          + "-" + ech.getFullYear();
                opt.value = sDate
                opt.innerText = sDate;
                sl.add(opt);
              });
              input = sl;         
              input['name']=child.InputName;              
              input['required']=child.InputRequired;
              //input.style.visibility = "hidden";
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
