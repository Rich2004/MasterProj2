// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// our team functions go below

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// activate the accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block"){
      panel.style.display = "none";
    } else {
      panel.style.display = "block";;
    }
  });
}


//submit and input for registration form//
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Last Name must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email Address must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    alert("Not a valid e-mail address");
    return false;
  } else {
    alert("Thank you for registering!");
  }
}
