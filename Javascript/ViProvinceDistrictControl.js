class ViProvinceDistrictControl {
  constructor(SearchId,ProSelectName,DistSelectName,IsRequired) {
    var dvSearch = document.createElement("div");
      dvSearch.id = SearchId; dvSearch.className = "ViProvinceDistrictControl";
  
    var DataPath = this.DataPath = DomainPath + "Data/";
    var slProvinces = document.createElement("select"),
        slDistricts = document.createElement("select");
        slProvinces.id = slProvinces.name = ProSelectName;
        slDistricts.id = slDistricts.name = DistSelectName;
        slProvinces['required']=slDistricts['required']=(IsRequired)?"*":'';
    var dProvinces, me=this;    
    getDataFromJsonFile(DataPath + "ViProvinces.json", function(sData){
      dProvinces = JSON.parse(sData);       
      var optC = document.createElement("option"); optC.value=""; optC.innerText = "Chọn tỉnh thành";
      slProvinces.add(optC,0);
      for (var i = 0; i < dProvinces.length; i++) {
          var Province = dProvinces[i]; 
          if(typeof Province === 'object'){
            for (var key in Province) {
                  if (Province.hasOwnProperty(key)) { 
                    var opt = document.createElement("option");
                    opt.value = Province[key].name;
                    opt.innerText = Province[key].name; 
                    slProvinces.add(opt) ;                        
                  }
              }
          }
      }
      var optDst = document.createElement("option");
      optDst.value=""; optDst.innerText = "Chọn quận huyện";
      slDistricts.add(optDst,0);
      slProvinces.addEventListener("change",function(){me.updateDistricts(dProvinces,this.value,slDistricts)});
    });     
    dvSearch.appendChild(slProvinces);
    dvSearch.appendChild(slDistricts);
    return dvSearch;
  }
  updateDistricts(dProvinces,ProvinceValue,slDistricts){
    clearSelectOptions(slDistricts,1);
      for (var i = 0; i < dProvinces.length; i++) {
        var Province = dProvinces[i]; 
        if(typeof Province === 'object'){
              for (var key in Province) {
                    if (Province.hasOwnProperty(key)) { 
                      if(ProvinceValue===Province[key].name){
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
    var me = this;
    slDistricts.addEventListener("change",function(){
      me.ProvinceValue = ProvinceValue;
      me.DistrictValue = slDistricts.value;
    });       
  }
}