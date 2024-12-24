const images = ["assets/image1.jpg", "assets/image2.jpg", "assets/image3.jpg"];
let currentIndex = 0;

function updateSlider() {
    const slider = document.getElementById("slider");
    slider.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateSlider, 3000);
