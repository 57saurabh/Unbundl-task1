let slideIndex = 0;
    let timer;
    
    document.addEventListener('DOMContentLoaded', function() {
      showSlides();
      document.getElementById('prev').addEventListener('click', () => plusSlides(-1));
      document.getElementById('next').addEventListener('click', () => plusSlides(1));
    
      const slides = document.querySelectorAll('.mySlides');
      slides.forEach(slide => {
        slide.addEventListener('mouseenter', pauseSlides);
        slide.addEventListener('mouseleave', startSlides);
      });
    });
    
    function showSlides() {
      let slides = document.getElementsByClassName('mySlides');
      let dots = document.getElementsByClassName('dot');
    
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
      }
    
      slideIndex++;
    
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
    
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('active');
    
      timer = setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    
    function plusSlides(n) {
      clearTimeout(timer);
      slideIndex += n;
      showSlides();
    }
    
    function pauseSlides() {
      clearTimeout(timer);
    }
    
    function startSlides() {
      timer = setTimeout(showSlides, 2000);
    }
    