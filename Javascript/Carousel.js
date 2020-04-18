class Carousel {
  constructor(DivCarouselId) {
    var dvCarousel = document.getElementById(DivCarouselId);
    var Imgs = [];
    Array.from(dvCarousel.getElementsByTagName("img")).forEach(ech => { Imgs.push(ech); });
    dvCarousel.innerHTML = "";
    this.DotBar = document.createElement("div");
    this.DotBar.className = "dot-bar";
    this.SlideIndex = 1;
    this.Slides = [];
    var n = 0;
    var me = this;
    Imgs.forEach(img => {
      n += 1;
      var slide = me.CarouselSlide(img);
      this.Slides.push(slide);
      dvCarousel.appendChild(slide);
      var sp = document.createElement("span");
      sp.className = "dot";
      sp.innerText = n;
      sp.onclick = function () { me.currentSlides(parseInt(this.innerText)); };
      this.DotBar.appendChild(sp);
    });
    this.Prev = document.createElement("a"), this.Next = document.createElement("a");
    this.Prev.className = "prev";
    this.Prev.innerHTML = "&#10094;";
    this.Next.className = "next";
    this.Next.innerHTML = "&#10095;";
    this.Prev.onclick = function () { me.plusSlides(-1); };
    this.Next.onclick = function () { me.plusSlides(1); };
    var swpe = new Swipe(dvCarousel);
    swpe.onLeft(function(){me.plusSlides(1);});
    swpe.onRight(function(){me.plusSlides(-1);});
    swpe.run();
    dvCarousel.appendChild(this.Prev);
    dvCarousel.appendChild(this.Next);
    dvCarousel.appendChild(this.DotBar);
    this.Carousel = dvCarousel;
  }
  show() {
    this.showSlides(this.SlideIndex);
  }
  plusSlides(n) {
    this.showSlides(this.SlideIndex += n);
  }
  currentSlides(n) {
    this.showSlides(this.SlideIndex = n);
  }
  showSlides(n) {
    var i, dots = this.DotBar.getElementsByClassName("dot");   
    if (n > this.Slides.length) {
      this.SlideIndex = 1;
    }
    if (n < 1) {
      this.SlideIndex = this.Slides.length;
    }
    for (i = 0; i < this.Slides.length; i++) {
      this.Slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }   
    this.Slides[this.SlideIndex - 1].style.display = "block";
    dots[this.SlideIndex - 1].className += " active";
  }
  CarouselSlide(img){
    var dv = document.createElement("div"),
        a = document.createElement("a"),
        dvCap = document.createElement("div");        
    a.href = img.src, a.appendChild(img);
    dvCap.className = "caption"; dvCap.innerText = img.alt;
    dv.appendChild(a);
    dv.appendChild(dvCap);
    dv.className = "slides fade";
    return dv;
  } 
}
  