const displayedImage = document.getElementById('displayedImage');
const imageButtons = document.querySelectorAll('.imageButton');

// Add click event listeners to all image buttons
imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imageUrl = button.getAttribute('data-image');
        displayedImage.src = imageUrl;
    });
});



// Get the header element
const header = document.querySelector('header');

// Calculate the initial top offset of the header
const initialOffset = header.getBoundingClientRect().top + window.scrollY;

// Function to handle scroll events
function handleScroll() {
    // Calculate the current scroll position
    const currentScroll = window.scrollY;

    // If the header is about to go off the top of the screen, make it fixed at the top
    if (initialOffset - currentScroll <= 0) {
        header.style.position = 'fixed';
        header.style.top = '0';
    } else {
        // Otherwise, reset it to its original position
        header.style.position = 'absolute';
        header.style.top = initialOffset + 'px';
    }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);


