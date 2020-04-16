class HLinks {
  constructor(Id) {
    var HLsrc = DomainPath + "images/icons/HLinks/",
        HSsrc = DomainPath + "images/icons/Shares/";
    var dv = document.createElement("div"),
        dvHShares = document.createElement("div");
    dv.id = Id; dv.className = "HLinks";
    dvHShares.id = Id + "dvHShares";dvHShares.className="HShares";
    dvHShares.style.display = 'none'; 
    this.DataHLinks =[
      ["Phone.png","tel:0908965657"],
      ["Messenger.png","http://m.me/chalkface.vn"],
      ["Viber.png","viber://chat/?number=%2B84908965657"],
      ["Zalo.png","https://zalo.me/0908965657"],
      ["Email.png","mailto:info@chalkface.vn"],
      ["QA.png","https://www.facebook.com/groups/chalkfacevisa"],
      ["GoogleMap.png","https://www.google.com/maps/place/Chalkface/@10.8548994,106.648419,17z/data=!3m1!4b1!4m5!3m4!1s0x317529c59d32372d:0x373d5f3f042d20f2!8m2!3d10.8548941!4d106.6506077?hl=vi-VN"],
      ["ContactForm.png","/p/contact-us.html"],
      ["Share.png","javascript:openBox('" + dvHShares.id + "',true)"]
    ];
    this.DataHShares = [
      ["CopyLink.png", "javascript:copyUrltoClipboard()"],
      ["Facebook.png", "javascript:shareLink('Facebook')"],
      ["Twitter.png", "javascript:shareLink('Twitter')"],
      ["Pinterest.png", "javascript:shareLink('Pinterest')"],
      ["BlueEmail.png", "javascript:shareLink('Email')"],
      ["Close.png", "javascript:openBox('" + dvHShares.id + "',false)"]
    ];
    var me = this;
    this.DataHLinks.forEach(ech=>{
      var a = document.createElement("a"),img = document.createElement("img");
      img.src = HLsrc + ech[0]; a.href = ech[1];a.appendChild(img);
      dv.appendChild(a);
    });
    this.DataHShares.forEach(ech=>{
      var a = document.createElement("a"),img = document.createElement("img");
      img.src = HSsrc + ech[0]; a.href = ech[1];a.appendChild(img);
      dvHShares.appendChild(a);
    });
    document.body.appendChild(dv);document.body.appendChild(dvHShares);
    dvHShares.style.bottom = dv.offsetHeight + "px";
  }  
}
