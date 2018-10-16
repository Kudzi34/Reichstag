console.log("lol");

var ta = document.getElementById("tArea");
ta.addEventListener("textarea", function() {
    console.log(textarea.value);
});

var b = document.getElementsByClassName("box");
function rgbColors() {
    var rgb = [];

    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 256);
        rgb[i] = r;
    }

    return rgb;
}

var randomColorArray = rgbColors();

b.addEventListener('mousedown', function randomColorArray() {
    var rgb = [];

    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 256);
        rgb[i] = r;
    }

    return rgb;
}

var randomColorArray = rgbColors();)*/
