const currentLocation = location.href;
const menuItem = document.querySelectorAll(".menu-list li");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].children[1].href === currentLocation) {
    menuItem[i].className = "currentLink";
  }
}
//Jquery Code
$("document").ready(function () {
  //Jquery Code for opening and closing menu list on mobile screen devices
  $(".open").click(function () {
    $(".menu-list").addClass("active");
  });
  $(".close").click(function () {
    $(".menu-list").removeClass("active");
  });
});

$("document").ready(function () {
  //Jquery Code for stylying active links in header ,
  //destinations section,crew section and technology
  //section on clicking them

  $(".dest-links span").click(function () {
    $(".dest-links span").removeClass("currentLink");
    $(this).addClass("currentLink");
  });
  $(".on-off-btns span").click(function () {
    $(".on-off-btns span").removeClass("currentBtn");
    $(this).addClass("currentBtn");
  });
});
