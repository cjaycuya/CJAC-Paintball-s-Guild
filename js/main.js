// Loading Page
$(window).on('load',function(){
  setTimeout(function(){ 
  $('.page-loader').fadeOut('slow');
  },2500);
});



//For Mobile Open and Close Button Navigation Menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("hamburgerButton").style.color = "rgba(0,0,0,0.0)";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("hamburgerButton").style.color = "#ffffff";
}


//Dynamic Year (Current Timestamp) for Copyright
var datetime = new Date().getFullYear();
console.log(datetime); 
document.getElementById("time").textContent = datetime;


//Number Animated Count
$(window).on('scroll', function(e) {
  if ($(window).scrollTop() >= ($("#counter").offset().top - ($(window).height()))) {
    if (!$("#counter").hasClass("animated")) {
      $('.counting1').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      $('.counting2').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      $('.counting3').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      $("#counter").addClass("animated");
    }
  }
});



//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("a-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//Revealing Onscroll for Section selected
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


// for modal gallery images
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}


// For Sticky Navigation Menu
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}