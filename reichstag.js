var hammenu = document.getElementById("hamburger-menu");
var xbutton = document.getElementById("x");
var smallmenu = document.getElementById("menu");
var hamimage = document.getElementById("image2");

hamimage.addEventListener("click", function() {
    document.body.classList.add("menu-on");
    hammenu.style.transform = "translateX(0%)";
});

hammenu.addEventListener("click", function() {
    hammenu.style.transform = "translateX(100%)";

    document.body.classList.remove("menu-on");
});

xbutton.addEventListener("click", function(e) {
    hammenu.style.transform = "translateX(100%)";
    document.body.classList.remove("menu-on");
    e.stopPropagation();
});

smallmenu.addEventListener("click", function(e) {
    e.stopPropagation();
});
(function() {
    $(".modal").hide();
    setTimeout(function() {
        $(".modal").show();
    }, 1000);
    $("#modalX").on("click", function(e) {
        console.log("working");
        $(".modal").hide();
    });
})();
