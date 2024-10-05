const draggableImage = document.getElementById("draggableImage");


draggableImage.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id); 
});


document.body.addEventListener("dragover", (event) => {
    event.preventDefault(); 
});


document.body.addEventListener("drop", (event) => {
    event.preventDefault(); 
    const data = event.dataTransfer.getData("text/plain"); 
    const draggedElement = document.getElementById(data);
    const offsetX = event.clientX - draggedElement.clientWidth / 2; 
    const offsetY = event.clientY - draggedElement.clientHeight / 2;
    draggedElement.style.position = 'absolute'; 
    draggedElement.style.left = `${offsetX}px`;
    draggedElement.style.top = `${offsetY}px`;
});

const noButton = document.getElementById("noButton");

// Function to move the NO button to a random position
function moveButton() {
    // Get the width and height of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the width and height of the NO button
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculate random x and y positions
    const randomX = Math.random() * (windowWidth - buttonWidth);
    const randomY = Math.random() * (windowHeight - buttonHeight);

    // Set new positions for the button
    noButton.style.left = `${randomX}px`; 
    noButton.style.top = `${randomY}px`; 
}

// Move the button when the mouse enters its area
noButton.addEventListener("mouseenter", moveButton);

