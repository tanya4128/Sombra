// Two images side by side
function three() {
    var elements = document.getElementsByClassName("grid1_of_3");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "26%";
    }
}

// Full-width images
function one() {
    var elements = document.getElementsByClassName("grid1_of_3");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
}
