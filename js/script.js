function Boost() {
    var content = document.getElementById("video");
    var views = document.getElementById("views").value;
    var url = document.getElementById("url").value;

    for (var i = 0; i < views; i++) {
        content.innerHTML += "<iframe width='306' height='202' src='" + url + "' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    }
}
