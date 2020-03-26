var DataPath = "https://cdn.jsdelivr.net/gh/luthanhlong/chalkface/Data/";alert(DataPath);
var dCountries, dTuitions;
var dvSchoolTools, ipSchool, slTuitions, slCountries, slStates, btnFindSchool;
    dvSchoolToolsId="dvSchoolTools",ipSchoolId="ipSchool", slTuitionsId ="slTuitions",
    slCountriesId = "slCountries", slStatesId="slStates", btnFindSchoolId="btnFindSchool";

function initSchoolTools(){
    dvSchoolTools=document.getElementById(dvSchoolToolsId);
    ipSchool=document.getElementById(ipSchoolId);
    slTuitions = document.getElementById(slTuitionsId);
    slCountries=document.getElementById(slCountriesId);
    slCountries.addEventListener("change",updateStates);
    slStates=document.getElementById(slStatesId);
    btnFindSchool=document.getElementById(btnFindSchoolId);
    btnFindSchool.addEventListener("click",findSchool);
}

getDataFromJsonFile(DataPath + "Com.json", function(sData){ 
    initSchoolTools(); alert(DataPath);
    dTuitions = JSON.parse(sData);        
    var opt0 = document.createElement("option"); opt0.value=0; opt0.innerText = "Chọn học phí";
    slTuitions.add(opt0,0); 
    var Tuitions =dTuitions[0].Tuitions, n=0; 
    Tuitions.forEach(ech => {
      var opt = document.createElement("option");
      opt.value = ech;
      opt.innerText = ech; 
      slTuitions.add(opt,n+1);
    });
  }
)
getDataFromJsonFile(DataPath + "Countries.json", function(sData){   
    dCountries = JSON.parse(sData);       
    var optC = document.createElement("option"); optC.value=0; optC.innerText = "Chọn quốc gia";
    slCountries.add(optC,0);
        
    var optS = document.createElement("option");
    optS.value=0; optS.innerText = "Chọn vùng";
    slStates.add(optS,0);

    for (var i = 0; i < dCountries.length; i++) {
        var Country = dCountries[i]; 
        if(typeof Country === 'object'){
          for (var key in Country) {
                if (Country.hasOwnProperty(key)) { 
                  var opt = document.createElement("option");
                  opt.value = Country[key].alpha2;
                  opt.innerText = Country[key].name; 
                  slCountries.add(opt,i+1) ;                        
                }
            }
        }
    }      
    
  }
)
function updateStates(){
  clearSelectOptions(slStates,1);
    for (var i = 0; i < dCountries.length; i++) {
      var Country = dCountries[i]; 
      if(typeof Country === 'object'){
            for (var key in Country) {
                  if (Country.hasOwnProperty(key)) { 
                    if(slCountries.value===Country[key].alpha2){
                      
                      Country[key].states.forEach(state => {
                        var opt = document.createElement("option");
                        opt.value = state;
                        opt.innerText = state; 
                        slStates.add(opt,i+1) ;

                      });
                    }
                                          
                  }
            }
      }
    }       
}
function findSchool(){
    var search="/search?q=label:" 
        + ipSchool.value
        + "|label:"
        + slTuitions.value
        + "|label:"
        + slCountries.value
        + "|label:"
        + slStates.value;  
    window.location =  window.location.protocol + "//" + window.location.hostname + search;
}

