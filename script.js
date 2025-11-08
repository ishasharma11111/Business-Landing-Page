// script.js (Optional Example)

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});// script.js

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Increment index and loop back if past the end
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";  
  
  // Change image every 5 seconds (5000 milliseconds)
  setTimeout(showSlides, 5000); 
}