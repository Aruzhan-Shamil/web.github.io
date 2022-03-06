
function struck(ele) {
    //First time click
    if(ele.name != 'Click'){
        ele.name = "Click";
        ele.style = "text-decoration:line-through; list-style-type:none";
    }//end if
    //When click it again..
    else if(ele.name == 'Click'){
        ele.name = "Unclick";
        ele.style = "text-decoration:none; list-style-type:none";
    }//end else
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}