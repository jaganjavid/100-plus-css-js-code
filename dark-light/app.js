$(document).ready(function () {
    const themeSwitch = 
    document.querySelector("#toggle-theme");
    themeSwitch.addEventListener("change", 
    () => {
      document.body.classList.toggle
      ("dark-theme");
    });
  
    $("#toggle-theme").on("click", 
    function () {
      $(this).parent()
      .toggleClass("checked");
    });
});
  