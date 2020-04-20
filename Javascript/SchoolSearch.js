class SchoolSearch {
  constructor(SchoolSearchId) {
    var dvSchoolSearch = document.getElementById(SchoolSearchId);
    var DataPath = this.DataPath = DomainPath + "Data/";
    var ipSchool = document.createElement("input"),
        slTuitions = document.createElement("select"),
        slCountries = document.createElement("select"),
        slStates = document.createElement("select"),
        btnSearch = document.createElement("button");
    ipSchool.className = slTuitions.className = slCountries.className = slStates.className = btnSearch.className = "Tools";
    ipSchool["type"]="text";ipSchool["placeholder"]="Tìm trường, ngành học ...";
    var dCountries, me=this;
    //initialize slTuitions
    var opt0 = document.createElement("option"); opt0.value=""; opt0.innerText = "Chọn học phí";
    slTuitions.add(opt0,0); 
    var Tuitions =["Nhỏ hơn $10.000","$10.000 - $20.000",         
      "$20.000 - $30.000","$30.000 - $40.000", 
      "$40.000 - $50.000","Lớn hơn $50.000"];
    Tuitions.forEach(ech => {
      var opt = document.createElement("option");
      opt.value = opt.innerText = ech;
      slTuitions.add(opt);
    });
    getDataFromJsonFile(DataPath + "Countries.json", function(sData){
      dCountries = JSON.parse(sData);       
      var optC = document.createElement("option"); optC.value=""; optC.innerText = "Chọn quốc gia";
      slCountries.add(optC,0);        
      var optS = document.createElement("option");
      optS.value=""; optS.innerText = "Chọn vùng";
      slStates.add(optS,0);
      for (var i = 0; i < dCountries.length; i++) {
          var Country = dCountries[i]; 
          if(typeof Country === 'object'){
            for (var key in Country) {
                  if (Country.hasOwnProperty(key)) { 
                    var opt = document.createElement("option");
                    opt.value = Country[key].name;
                    opt.innerText = Country[key].name; 
                    slCountries.add(opt,i+1) ;                        
                  }
              }
          }
      }
      slCountries.addEventListener("change",function(){me.updateStates(dCountries,this.value,slStates)});

    })
    btnSearch.innerText = "Tìm";
    btnSearch.addEventListener("click",
    function(){
      me.findSchool(ipSchool.value,slTuitions.value,slCountries.value,slStates.value);
    });    
    dvSchoolSearch.appendChild(ipSchool);
    dvSchoolSearch.appendChild(slTuitions);
    dvSchoolSearch.appendChild(slCountries);
    dvSchoolSearch.appendChild(slStates);
    dvSchoolSearch.appendChild(btnSearch);
    this.SchoolSearch = dvSchoolSearch;
  }
  updateStates(dCountries,CountryValue,slStates){
    clearSelectOptions(slStates,1);
      for (var i = 0; i < dCountries.length; i++) {
        var Country = dCountries[i]; 
        if(typeof Country === 'object'){
              for (var key in Country) {
                    if (Country.hasOwnProperty(key)) { 
                      if(CountryValue===Country[key].name){
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
  findSchool(TextSearch,TuitionValue,CountryValue,StateValue){
    var search="/search/?q=";
    search +=(TextSearch!="")?"\"" + TextSearch + "\"":"";
    search +=(TuitionValue!="")?"+label:\"" + TuitionValue + "\"":"";
    search +=(CountryValue!="")?"+label:\"" + CountryValue + "\"":"";
    search +=(StateValue!="")?"+label:\"" + StateValue + "\"":""; 
    search +="+label:\"Universities\"";      
    window.location =  window.location.protocol + "//" + window.location.hostname + search;
  }
}