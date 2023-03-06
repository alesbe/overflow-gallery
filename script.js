let gallery = document.getElementById("gallery");

/* Move gallery according to mouse position */
window.onmousemove = e => {
    // Get mouse screen position
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Translate screen position to percentage
    let mousePercentageX = mouseX / window.innerWidth;
    let mousePercentageY = mouseY / window.innerHeight;

    // Remove window height and width from total range of movement (if we don't do that, it allows us to scroll the double of the gallery size)
    let maxX = gallery.offsetWidth - window.innerWidth;
    let maxY = gallery.offsetHeight - window.innerHeight;

    // New position
    let newX = mousePercentageX * maxX * -1;
    let newY = mousePercentageY * maxY * -1;

    // Move gallery
    gallery.animate({
        transform: `translate(${newX}px, ${newY}px)`
      }, {
        duration: 6000,
        easing: "ease"
      })
}