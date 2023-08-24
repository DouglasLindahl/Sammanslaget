const displayedImage = document.getElementById('displayedImage');
const imageButtons = document.querySelectorAll('.imageButton');

// Add click event listeners to all image buttons
imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imageUrl = button.getAttribute('data-image');
        displayedImage.src = imageUrl;
    });
});


2, 12, 1112, 3112, 132112 


