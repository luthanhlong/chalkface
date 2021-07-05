class ViSchoolSearch {
  constructor(SearchId) {
    var dvSearch = document.getElementById(SearchId);
    var DataPath = this.DataPath = DomainPath + "Data/";
    var ipText = document.createElement("input"),
        slGroups = document.createElement("select"),
        slProvinces = document.createElement("select"),
        slDistricts = document.createElement("select"),
        btnSearch = document.createElement("button");
    ipText.className = slGroups.className = slProvinces.className = slDistricts.className = btnSearch.className = "Tools";
    ipText["type"]="text";ipText["placeholder"]="Tìm trường ...";
    var dProvinces, me=this;
    //initialize slTuitions
    var opt0 = document.createElement("option"); opt0.value=""; opt0.innerText = "Chọn nhóm";
    slGroups.add(opt0,0); 
    const Groups =["Trung tâm","Mầm non", "Tiểu học","THCS","THPT","Đại học"];
    Groups.forEach(ech => {
      var opt = document.createElement("option");
      opt.value = opt.innerText = ech;
      slGroups.add(opt);
    });
    getDataFromJsonFile(DataPath + "ViProvinces.json", function(sData){
      dProvinces = JSON.parse(sData);       
      var optC = document.createElement("option"); optC.value=""; optC.innerText = "Chọn tỉnh thành";
      slProvinces.add(optC,0);        
      var optDst = document.createElement("option");
      optDst.value=""; optDst.innerText = "Chọn quận huyện";
      slDistricts.add(optDst,0);
      for (var i = 0; i < dProvinces.length; i++) {
          var Province = dProvinces[i]; 
          if(typeof Province === 'object'){
            for (var key in Province) {
                  if (Province.hasOwnProperty(key)) { 
                    var opt = document.createElement("option");
                    opt.value = Province[key].numeric;
                    opt.innerText = Province[key].name; 
                    slProvinces.add(opt) ;                        
                  }
              }
          }
      }
      slProvinces.addEventListener("change",function(){me.updateDistricts(dProvinces,this.value,slDistricts)});
    })
    btnSearch.innerText = "Tìm";
    btnSearch.addEventListener("click",
    function(){
      me.find(ipText.value,slGroups.value,(slProvinces.selectedIndex==0)?"":slProvinces.options[slProvinces.selectedIndex].text,slDistricts.value);
    });    
    dvSearch.appendChild(ipText);
    dvSearch.appendChild(slGroups);
    dvSearch.appendChild(slProvinces);
    dvSearch.appendChild(slDistricts);
    dvSearch.appendChild(btnSearch);
    dvSearch.target = dvSearch.getAttribute("target");
    this.Search = dvSearch;
  }
  updateDistricts(dProvinces,ProvinceValue,slDistricts){
    clearSelectOptions(slDistricts,1);
      for (var i = 0; i < dProvinces.length; i++) {
        var Province = dProvinces[i]; 
        if(typeof Province === 'object'){
              for (var key in Province) {
                    if (Province.hasOwnProperty(key)) { 
                      if(ProvinceValue===Province[key].numeric){
                          var Dsts = Province[key].districts;
                          for(var j=0;j <Dsts.length;j++){
                            var Dst = Dsts[j];
                            var opt = document.createElement("option");
                            opt.value = Dst;
                            opt.innerText = Dst; 
                            slDistricts.add(opt) ;
                          }                          
                      }                                            
                    }
              }
        }
      }       
  }
  find(TextSearch,GroupValue,ProvinceValue,DistrictValue){
    var search="/search/?q=";
    search +=(TextSearch!="")?"\"" + TextSearch + "\"":"";
    search +=(GroupValue!="")?"+label:\"" + GroupValue + "\"":"";
    search +=(ProvinceValue!="")?"+label:\"" + ProvinceValue + "\"":"";
    search +=(DistrictValue!="")?"+label:\"" + DistrictValue + "\"":"";
    window.location =  window.location.protocol + "//" + window.location.hostname + search;
  }
}