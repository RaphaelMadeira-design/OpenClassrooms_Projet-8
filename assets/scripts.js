$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.setAttribute("loading", "lazy");
    });
});