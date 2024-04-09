document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('moveableImage');

    let isDragging = false;
    let dragStartX, dragStartY; // Starting positions of a drag
    let initialImageX = 0, initialImageY = 0; // Initial position of the image

    image.addEventListener('mousedown', function(e) {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        image.style.position = 'absolute';
        
        // Calculate initial position if not set
        const rect = image.getBoundingClientRect();
        initialImageX = rect.left;
        initialImageY = rect.top;
        
        // Prevent default dragging behavior for image elements
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            // Calculate how much the mouse has moved
            const dx = e.clientX - dragStartX;
            const dy = e.clientY - dragStartY;
            
            // Set the new position based on that movement
            image.style.left = initialImageX + dx + 'px';
            image.style.top = initialImageY + dy + 'px';
        }
    });

    document.addEventListener('mouseup', function(e) {
        if (isDragging) {
            isDragging = false;

            // Update initial positions for next drag
            initialImageX += e.clientX - dragStartX;
            initialImageY += e.clientY - dragStartY;
        }
    });
});