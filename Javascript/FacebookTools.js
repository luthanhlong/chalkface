class FbLikeShareTool {
    constructor(IsShare,HorizontalPosition,VerticalPosition,dataUrl) {
        var dvFb = document.createElement("div"); 
        var sUrl = (dataUrl)?dataUrl:window.location.origin + window.location.pathname;       
        const Atts =[
          ['class','fb-like'],
          ['data-href',sUrl],
          ['data-layout',"button_count"],
          ['data-action',"like"],
          ['data-size',"large"],
          ['data-share',IsShare]          
        ];       
        Array.from(Atts).forEach(ech=>{dvFb.setAttribute(ech[0],ech[1]);});       
        var sHor ="left:50%;";
        switch(HorizontalPosition){
            case "left":
                sHor = "left:12%;";
                break;
            case "right":
                sHor= "right:-10%;";
                break;
            default:
                sHor ="left:50%;";
                break;
        }
        var sVer ="bottom:-10px;";
        switch(VerticalPosition){
            case "top":
                sVer = "top:20px;";
                break;
            case "middle":
                sVer= "top:50%;";
                break;
            default:
                sVer ="bottom:-10px;";
                break;
        }
        dvFb.setAttribute('style',"transform: translate(-50%, -50%);display:block;"+ sHor + sVer + ";position:absolute;margin: 0 auto");     
        return dvFb;
    }
}