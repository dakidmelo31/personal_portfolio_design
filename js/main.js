$(document).ready(($)=>{
  var currentMousePos = { x: -1, y: -1 };
  var size = {width: $(window).width(), height: $(window).height()}
  var docSize = {width: $("body").width(), height: $("body").height()}


var menuOpen = false;

function adjustScroll(){
  if(menuOpen){
    $("body, .page").css("overflow-y", "auto");
  }
  {
  }
}



$("#menu-toggle").click((e)=>{
  e.preventDefault();
  if(menuOpen){
    $("body, .page").css("overflow-y", "auto");
    menuOpen = false;
    anime({
      targets: ".main-links",
      width: "130px",
      height: "50vh",
      backgroundColor: "#90f",
      opacity: .5,
      translateX: [0, "-120vw"],
      duration: 4000
    })
  
  }
  else{
    menuOpen = true;
    $("body, .page").css("overflow-y", "hidden");
    anime({
      targets: ".main-links",
      width: "100vw",
      height: "100vh",
      borderRadius: ["50%", 0],
      opacity: 1,
      backgroundColor: "#fff",
      translateX: ["100%", 0],
      duration: 2000
    })
  }
  console.log(menuOpen)
})  

$(".main-links a").click((e)=>{
  menuOpen = false;
  adjustScroll();  
  anime({
    targets: ".main-links",
    width: "130px",
    height: "50vh",
    backgroundColor: "#90f",
    opacity: .5,
    translateX: [0, "-120vw"],
    duration: 4000
  })


})

  $(window).scroll((event)=>{
    let fromTop  = $(window).scrollTop();
    if(fromTop > size.height - 200){
      anime({
        targets: ".hire-me",
        translateX: function(el) {
          return el.getAttribute('data-x');
        },
        translateY: function(el, i) {
          return 50 + (-50 * i);
        },
        scale: function(el, i, l) {
          return (l - i) + .25;
        },
        rotate: function() { return anime.random(-360, 360); },
        borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
        duration: function() { return anime.random(1200, 1800); },
        delay: function() { return anime.random(0, 400); },
        direction: 'alternate',
        loop: true
      })
    }
  })

// $(document).mousemove(function(event) {
//       currentMousePos.x = Math.min(event.pageX, size.width);
//       currentMousePos.y = Math.min(event.pageY, size.height);
//       anime({
//         targets: ".cursor",
//         left: currentMousePos.x,
//         top: currentMousePos.y,
//       })
//   });
  // $(document).mousedown(function(e){
  //   anime({
  //     targets: ".cursor",
  //     borderSize: 3,
  //     borderColor: "deeppink",
  //     duration: 300
  //   })
  // })
  // $(document).mouseup(function(e){
  //   anime({
  //     targets: ".cursor",
  //     borderSize: 1,
  //     borderColor: "#9900ff",
  //     duration: 300
  //   })
  // })

  anime({
        targets: '.small-sections',
        translateY: "+=60px",
        duration: 3000,
        delay: [500, anime.stagger(1000, {direction: 'reverse'})]
      });

      anime({
        targets: ".logo-item",
        translateY: [-90, 0],
        ease: "elasticInOut(1, 0.5)",
        delay: [anime.stagger(200), 5000],
        complete: ()=>{

        anime({
            targets: ".logo-item .logo-wrapper",
            translateY: 7,
            delay: function(el, i) { return i * 140; },
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
            })

        }
      })


    anime({
        targets: ".middle-hero",
        translateY: 10,
        delay: function(el, i) { return i * 100; },
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
        })
        anime({
            targets: '.main-links a',
            translateY: 20,
            delay: anime.stagger(300, {easing: 'easeOutQuad'})
          });
        anime({
        targets: '#hire-me',
        translateX: [
            { value: 250, duration: 1000, delay: 500 },
            { value: 0, duration: 1000, delay: 500 }
          ],
          scaleX: [
            { value: 2, duration: 100, delay: 500, easing: 'easeOutExpo' },
            { value: 1, duration: 900 },
            { value: 2, duration: 100, delay: 500, easing: 'easeOutExpo' },
            { value: 1, duration: 900 }
          ],
          scaleY: [
            { value: [1.75, 1], duration: 500 },
            { value: 2, duration: 550, delay: 1400, easing: 'easeOutExpo' },
            { value: 1.75, duration: 550, delay: 1700, easing: 'easeOutExpo' },
          ],
          easing: 'easeOutElastic(1, .8)',
          delay: 3000,
          loop: true
        });

        // $("body").mousemove((e)=>{
        //   let top = e.pageY - 188;
        //   anime({
        //     targets: "div.cursor",
        //     left: e.pageX,
        //     top: top,
        //     duration: 100
        //   })
        // })

      setInterval(()=>{
        anime({
          targets: '.mini-row',
          translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'z'}),
          translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
          rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'z'}),
          delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
          easing: 'easeInOutQuad',
          direction: "alternate"
        });        

      }, 10000)

        anime({
          targets: ".tile",
          translateY: "+=6",
          translateX: "-=6",
          delay: function(el, i) { return i * 20; },
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutSine'
  
        })

        anime({
          targets: '.tile',
          translateX: function(el) {
            return el.getAttribute('data-x');
          },
          translateY: function(el, i) {
            return 50 + (-50 * i);
          },
          scale: function(el, i, l) {
            return (l - i) + .25;
          },
          rotate: function() { return anime.random(-360, 360); },
          borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
          duration: function() { return anime.random(1200, 1800); },
          delay: function() { return anime.random(0, 400); },
          direction: 'alternate',
          loop: true
        });        

        
      })
var contactAnimation = 0;
var eduAnimation = 0;
var projectsAnimation = 0;
window.onscroll = ()=>{
  if(isScrolledIntoView(document.getElementById("connect")) && contactAnimation ===0){
    contactAnimation = 1;
    anime({
      targets: ".follow-row a",
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center', direction: 'reverse'})
    })
    
  }

  if(isScrolledIntoView(document.getElementById("education")) && eduAnimation ===0){
    eduAnimation = 1;
    anime({
      targets: ".work-role",
      translateY: "+=50",
      duration: 2000,
      direction: "alternate",
      delay: anime.stagger(50)
    })
  setInterval(()=>{
      anime({
        targets: ".work-role",
        translateY: "+=50",
        duration: 2000,
        direction: "alternate",
        delay: anime.stagger(50)
      })
    }, 10000)
        
  }
  const items = document.querySelectorAll(".card");
  items.forEach((el)=>{

    if(isScrolledIntoView(el, - 170)){
      anime({
        targets: ".card",
        translateX: 0,
        duration: 2000,
        scale: 1.0,
        direction: "alternate",
        opacity: 1.0,
        delay: anime.stagger(50)
      })
          
    }
  


  })

}


anime({
  targets: ".card",
  translateX: 90,
  scale: 0.8,
  opacity: 0.5,
  delay: anime.stagger(200) // increase delay by 100ms for each elements.
})





function isScrolledIntoView(elem, padding = 0)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top + padding;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


(function($) { "use strict";
 
 	//Parallax            

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".cursor"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }              
              
  
//Scroll back to top
              
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  		
		/* Hero Case study images */			
		
		$('.main-links a:nth-child(1)').trigger('mouseenter')
  
  });            
              
})(jQuery); 







var o = $("#middle-hero");
$("#middle-hero").on("mousemove", function (t) {
    var e = -($(window).innerWidth() / 2 - t.pageX) / 30,
        n = ($(window).innerHeight() / 2 - t.pageY) / 10;
    o.attr("style", "transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg)")
})
