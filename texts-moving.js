// All notes (including HTML file and this JavaScript file) are from LLM(s), please contact me (https://github.com/SiberiaHusky/) if there is any problem.
// This project is licensed under the MIT License
// I'm happy to receive issues or PRs

// Array of possible movement directions
const directions = ['up', 'down', 'left', 'right'];

// Variable to control whether the animation is paused
let isPaused = false;

// Default configuration object with step size, minimum animation duration, and maximum animation duration
const defaultConfig = {
    step: 100, // offsets moved per step
    animationMinDuration: 2, // minimum duration of the animation in seconds
    animationMaxDuration: 7  // maximum duration of the animation in seconds
};

// Function to retrieve configuration, attempting to get it from a script tag, otherwise returning an empty object
function getConfig() {
    const scriptElements = document.getElementsByTagName('script');
    for (const script of scriptElements) {
        if (script.type === 'texts-moving-config') {
            return JSON.parse(script.innerText);
        }
    }
    return {};
}

// Merge default configuration with custom configuration
const config = { ...defaultConfig, ...getConfig() };

// Function to generate a random animation duration
function getRandomAnimationDuration(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to execute after the document has been loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the text content from the element with the id 'text-fit'
    var textFitContent = document.getElementById('text-fit').innerText;

    // Get the text container element by its id 'text-container'
    var textContainer = document.getElementById('text-container');

    // Set the 'data-texts' attribute of the text container to the text content retrieved
    textContainer.setAttribute('data-texts', textFitContent);

    const container = document.getElementById('text-container');
    if (!container) return; // If the container element is not found, exit the function

    // Split the container's data-texts attribute into an array of individual characters
    const texts = container.getAttribute('data-texts').split('');
    let elements = []; // Array to store text elements

    // Function to create a text element
    function createTextElement(text) {
        const element = document.createElement('div');
        element.className = 'text';
        element.textContent = text;
        container.appendChild(element);
        return element;
    }

    // Function to toggle the paused state
    function togglePause() {
        isPaused = !isPaused;
        if (isPaused) {
            console.log('Paused');
        } else {
            console.log('Resumed');
        }
    }

    // Function to move an element
    function moveElement(element) {
        if (isPaused) return; // If the animation is paused, do not move

        // Get the position information of the element and the container
        let rect = element.getBoundingClientRect();
        let currentX = rect.left - container.getBoundingClientRect().left;
        let currentY = rect.top - container.getBoundingClientRect().top;

        const containerRect = container.getBoundingClientRect();

        // Randomly select a movement direction
        const direction = directions[Math.floor(Math.random() * directions.length)];
        let newX, newY;
        switch (direction) {
            case 'up':
                newY = Math.max(0, currentY - config.step);
                newX = currentX;
                break;
            case 'down':
                newY = Math.min(containerRect.height - element.offsetHeight, currentY + config.step);
                newX = currentX;
                break;
            case 'left':
                newX = Math.max(0, currentX - config.step);
                newY = currentY;
                break;
            case 'right':
                newX = Math.min(containerRect.width - element.offsetWidth, currentX + config.step);
                newY = currentY;
                break;
        }

        // Set the animation duration and move the element
        const animationDuration = getRandomAnimationDuration(config.animationMinDuration, config.animationMaxDuration);
        element.style.transition = `all ${animationDuration}s ease-in-out`;
        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;

        // After the animation is complete, move the element again
        setTimeout(() => {
            if (!isPaused) {
                moveElement(element);
            }
        }, animationDuration * 1000);
    }

    // Function to start moving all elements
    function startMoving() {
        elements.forEach(element => {
            moveElement(element);
        });
    }

    // Create elements based on text and place them randomly in the container
    texts.forEach(text => {
        const element = createTextElement(text);
        element.style.left = `${Math.random() * (container.offsetWidth - element.offsetWidth)}px`;
        element.style.top = `${Math.random() * (container.offsetHeight - element.offsetHeight)}px`;
        elements.push(element);
    });

    // Start moving the elements
    startMoving();

    // Pause the animation when the mouse enters the container
    container.addEventListener('mouseenter', function () {
        togglePause();
        elements.forEach((element, index) => {
            element.style.transition = 'all 1s ease-in-out';
            element.style.left = `${(index * element.offsetWidth) + (container.offsetWidth / 2) - (elements.length * element.offsetWidth / 2)}px`;
            element.style.top = '50%';
        });
    });

    // Resume the animation when the mouse leaves the container
    container.addEventListener('mouseleave', function () {
        togglePause();
        startMoving();
    });
});