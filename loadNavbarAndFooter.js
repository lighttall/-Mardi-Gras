function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText;
}

load("navbar.html", document.getElementById("navigation"));
load("footer.html", document.getElementById("footer"));