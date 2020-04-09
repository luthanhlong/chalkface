//Set up Tab Tools
getDataFromJsonFile (DomainPath + "Data/Links.json",function(sData){
    var dLinks = JSON.parse(sData);
    var HBLinks = dLinks[0].HBottomLinks;
    var dvHLinks = document.createElement("div");
        dvHLinks.id = 'dvHorizontalLinks';
    for(var i=0;i<9;i++){
      var img = document.createElement("img"),lnk=document.createElement("a");
          img.className = "HImageLinks";
      switch(i){
        case 0:
          img.src = HBLinks.Phone.Image;
          lnk.href = HBLinks.Phone.Link;
          break;
        case 1:
          img.src = HBLinks.Messenger.Image;
          lnk.href = HBLinks.Messenger.Link;
          break;
        case 2:
          img.src = HBLinks.Viber.Image;
          lnk.href = HBLinks.Viber.Link;
          break;
        case 3:
          img.src = HBLinks.Zalo.Image;
          lnk.href = HBLinks.Zalo.Link;
          break;
        case 4:
          img.src = HBLinks.Email.Image;
          lnk.href = HBLinks.Email.Link;
          break;
        case 5:
          img.src = HBLinks.QA.Image;
          lnk.href = HBLinks.QA.Link;
          break;
        case 6:
          img.src = HBLinks.GoogleMap.Image;
          lnk.href = HBLinks.GoogleMap.Link;
          break;
        case 7:
          img.src = HBLinks.ContactForm.Image;
          lnk.href = HBLinks.ContactForm.Link;
          break;
        case 8:
          img.src = HBLinks.Share.Image;
          lnk.href = HBLinks.Share.Link;
          break;
      }          
      lnk.appendChild(img);
      dvHLinks.appendChild(lnk);          
    }
    document.body.appendChild(dvHLinks);
    //Create shares
    var dvShares = document.createElement("div");
    dvShares.id= "dvShares";dvShares.className="ShareButtons";
    dvShares.style.display = 'none';
    var ShareLinks = dLinks[0].ShareLinks;
    for(var i=0;i<6;i++){
        var img = document.createElement("img"),lnk=document.createElement("a");
            img.className = "HImageLinks";
        switch(i){
          case 0:
            img.src = ShareLinks.CopyLink.Image;
            lnk.href = ShareLinks.CopyLink.Link;
            break;
          case 1:
            img.src = ShareLinks.Facebook.Image;
            lnk.href = ShareLinks.Facebook.Link;
            break;
          case 2:
            img.src = ShareLinks.Twitter.Image;
            lnk.href = ShareLinks.Twitter.Link;
            break;
          case 3:
            img.src = ShareLinks.Pinterest.Image;
            lnk.href = ShareLinks.Pinterest.Link;
            break;
          case 4:
            img.src = ShareLinks.Email.Image;
            lnk.href = ShareLinks.Email.Link;
            break;
          case 5:
            img.src = ShareLinks.Close.Image;
            lnk.href = ShareLinks.Close.Link;
            break;
        }
        lnk.appendChild(img);
        dvShares.appendChild(lnk); 
    }
    document.body.appendChild(dvShares);
  }
)