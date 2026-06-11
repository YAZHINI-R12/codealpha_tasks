const images = document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

let currentIndex = 0;

function openLightbox(index){

    currentIndex = index;

    lightbox.style.display = "flex";

    lightboxImg.src =
    images[currentIndex].src;
}

function closeLightbox(){

    lightbox.style.display = "none";
}

function changeImage(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImg.src =
    images[currentIndex].src;
}

function filterImages(category){

    const items =
    document.querySelectorAll(".image");

    items.forEach(item => {

        if(category === "all" ||
           item.classList.contains(category)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}

function applyEffect(effect){

    const imgs =
    document.querySelectorAll(".gallery img");

    imgs.forEach(img => {

        switch(effect){

            case "grayscale":
                img.style.filter =
                "grayscale(100%)";
                break;

            case "sepia":
                img.style.filter =
                "sepia(100%)";
                break;

            case "blur":
                img.style.filter =
                "blur(3px)";
                break;

            case "brightness":
                img.style.filter =
                "brightness(150%)";
                break;

            default:
                img.style.filter =
                "none";
        }
    });
}
