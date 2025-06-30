// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.fontSize = "4.5vw";
  } else {
    document.getElementById("header").style.fontSize = "8vw";
  }
}
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})




// Chat Gpt
// In your zaaika.js
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


// slider_script.js
document.addEventListener('DOMContentLoaded', function() {
  const prevButtons = document.querySelectorAll('.prev');
  const nextButtons = document.querySelectorAll('.next');
  
  prevButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Implement logic for the previous button
          const container = button.closest('.container');
          const slide = container.querySelector('.slide');
          slide.scrollBy({ left: -slide.offsetWidth, behavior: 'smooth' });
      });
  });

  nextButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Implement logic for the next button
          const container = button.closest('.container');
          const slide = container.querySelector('.slide');
          slide.scrollBy({ left: slide.offsetWidth, behavior: 'smooth' });
      });
  });
});





