var imagePreview = document.getElementById('image_preview');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName('footer_image');
var modalImg = document.getElementById("modal_image");

for (var i = 0 ; i < imgs.length; i++){
    imgs[i].onclick = function(){
        imagePreview.style.display = "block";
        modalImg.src = this.src;
    };
}

// Get the <span> element that closes the modal
var spanClose = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
spanClose.onclick = function() {
    imagePreview.style.display = "none";
};
