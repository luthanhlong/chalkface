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
      ["Phone.png","tel:0908965657", "Gọi điện thoại"],
      ["Messenger.png","http://m.me/chalkface.vn", "Gửi tin nhắn qua facebook"],
      ["Viber.png","viber://chat/?number=%2B84908965657", "Gọi điện bằng Viber"],
      ["Zalo.png","https://zalo.me/0908965657","Gọi điện bằng Zalo"],
      ["Email.png","mailto:info@chalkface.vn","Gửi email"],
      ["QA.png","/p/dang-ky-hoi-dap.html", "Đăng ký tham giam buổi vấn đáp"],
      ["GoogleMap.png","https://goo.gl/maps/rg5czKUbKQNHn13Q6", "Địa chỉ trung tâm"],
      ["ContactForm.png","/p/contact-us.html", "Liên hệ"],
      ["Share.png","javascript:openBox('" + dvHShares.id + "',true)", "Chia sẽ"]
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
      img.src = HLsrc + ech[0]; a.href = ech[1]; img.alt=ech[2]; img.title=ech[2]; a.appendChild(img);
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
