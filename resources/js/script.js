// $(document).ready(function(){
   
// });


$('.navbar-nav .nav-link').click(function(){
  $('.navbar-nav .nav-link').removeClass('active');
  $(this).addClass('active');
})


// window.addEventListener("scroll",function(){
//     var navbar=document.querySelector("nav");
//     navbar.classList.toggle("sticky",window.scrollY>0)
//     navbar.classList.toggle("home_nav",window.scrollY>0)
//     navbar.classList.toggle("bg-light",window.scrollY>0)
//     navbar.classList.toggle("shadow",window.scrollY>0)
// })  

// var waypoint = new Waypoint({
//     element: document.getElementsByTagName('section'),
//     handler: function(direction) {
//         if(direction=='up'){
//             var navbar=document.querySelector("nav");
//             navbar.classList.toggle("sticky")
//             navbar.classList.toggle("home_nav")
//             navbar.classList.toggle("bg-light")
//             navbar.classList.toggle("shadow")
//         }
//         else{
//             var navbar=document.querySelector("nav");
//             navbar.classList.toggle("sticky")
//             navbar.classList.toggle("home_nav")
//             navbar.classList.toggle("bg-light")
//             navbar.classList.toggle("shadow")
//         }
        
//     }
//   })



//................................... Changing NavBar Styles .........................................

var navbar=document.querySelector("nav");

var waypoint = new Waypoint({
    element: document.getElementsByClassName('bg_dark')[0],
    handler: function(direction) {
        var navbar=document.querySelector("nav");
        navbar.classList.toggle("sticky")
        navbar.classList.toggle("home_nav")
        navbar.classList.remove("dark_nav");
        navbar.classList.add("light_nav");

        //before Going to home page do this
        if(direction=='up'){
          navbar.classList.remove("light_nav");
        }

    }
  })

var waypoint = new Waypoint({
    element: document.getElementsByClassName('bg_dark')[1],
    handler: function(direction) {
        var navbar=document.querySelector("nav");
        navbar.classList.remove("dark_nav");
        navbar.classList.add("light_nav");


    }
})

var waypoint = new Waypoint({
    element: document.getElementsByClassName('bg_dark')[2],
    handler: function(direction) {
        var navbar=document.querySelector("nav");
        navbar.classList.remove("dark_nav");
        navbar.classList.add("light_nav");

    }
  })



  //this is our home Page selection
  var waypoint = new Waypoint({
    element: document.getElementsByClassName('bg_light')[0],
    handler: function(direction) {
        var navbar=document.querySelector("nav");
        navbar.classList.remove("sticky");
        navbar.classList.add("home_nav");
        navbar.classList.remove("light_nav");
        
    }
  })

  var waypoint = new Waypoint({
    element: document.getElementsByClassName('bg_light')[1],
    handler: function(direction) {
        //alert("dfd");
        var navbar=document.querySelector("nav");
        navbar.classList.add("dark_nav");
        navbar.classList.remove("light_nav");

    }
  })
  var waypoint = new Waypoint({
    element: document.getElementsByClassName('bg_light')[2],
    handler: function(direction) {
        //alert("dfd");
        var navbar=document.querySelector("nav");
        navbar.classList.add("dark_nav");
        navbar.classList.remove("light_nav");

    }
  })
  var waypoint = new Waypoint({
    element: document.getElementsByClassName('bg_light')[3],
    handler: function(direction) {
        //alert("dfd");
        var navbar=document.querySelector("nav");
        navbar.classList.add("dark_nav");
        navbar.classList.remove("light_nav");

    }
  })



// animaiton on scroll inatilization
AOS.init();