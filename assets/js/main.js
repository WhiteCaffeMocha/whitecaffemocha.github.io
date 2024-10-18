$(function() {
  
  // Dropdown menu button event
  $("#dropDownMenuOpen").on("click", function() {
    
    $("#nav-collapse").toggleClass("show");
  
  });
  
  // Previous button event
  $("#previous_btn").on("click", function() {
    
    parent.history.back();
    return false;
    
  });

});