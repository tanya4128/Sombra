// Get the modal
var modal = document.getElementById('id01');
var imagePreview = document.getElementById('image_preview');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";

    } else if (event.target === imagePreview){
        imagePreview.style.display = "none";
    }
};
