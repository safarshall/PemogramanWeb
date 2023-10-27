let currentImageIndex = 0;

function showImage(index) {
    const mainImage = document.getElementById("main")
    mainImage.src = document.querySelectorAll(".side_view img")[index].src;
    currentImageIndex = index;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % 5; //assuming 5 images
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + 5) % 5; //assuming 5 images
    showImage(currentImageIndex);
}

// Adding event listener for arrow keys
document.addEventListener("keydown",
    (Event) => {
        if (Event.key === "ArrowLeft") {
            prevImage();
        } else if (Event.key === "ArrowRight") {
            nextImage();
        }
    })