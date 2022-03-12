// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }

//   var column1 = document.getElementsByClassName("Collapsible"); 
//   var index; 

//   for(index = 0; index < column1.length; index++){
//     column1[index].addEventListener("click", function(){
//         this.classList.toggle("active");
//         var content = this.nextElementSibling; 

//         if(content.style.maxHeight){
//             content.style.maxHeight = NULL; 
//         }
//         else{
//             content.style.maxHeight = content.style.maxHeight + "px";
//         }
//     });
//     }