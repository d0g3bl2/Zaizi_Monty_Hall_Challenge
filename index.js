// Zaizi Monty Hall index.js file

// Selected elements 
const startGameButton = document.querySelector("button");

// Event listeners
startGameButton.addEventListener("click", startGame);

// Array of prizes behind doors.
    let prizeArray = ['Car', 'Goat', 'Goat'];

    // const state = {
    //     grid: Array(3).fill(''),
    //     currentColumn: 0,
    // } 


// Function to draw doors that will contain prizes as their text content 
    function drawDoor(container, column, prize = '') {
        const door = document.createElement('div');
        door.className = 'door';
        door.id = `door${column}`;
        const doorParagraph = document.createElement('p');
        door.appendChild(doorParagraph);
        doorParagraph.textContent = prizeArray[column];
        doorParagraph.style.visibility = "hidden";

        container.appendChild(door);
        
        // return door;
    }

// Function to draw grid for doors.
    function drawGrid(container) {
        const grid = document.createElement('div');
        grid.className = 'grid';
    
        for (let i = 0; i < 3; i++) {
                drawDoor(grid, i)
                
            }
    
        container.appendChild(grid);
    }

// Function to load the page and draw the UI.
    function loadPage() {
        const game = document.querySelector("#game-container");
        
        prizeArray = prizeArrayShuffler();
        console.log(prizeArray);
        drawGrid(game);
    }

// Function to randomise the prize behind the door.
    function prizeArrayShuffler() {
        let shuffledPrizeArray = prizeArray.sort(() => Math.random() - .5)
        return shuffledPrizeArray
    }

// Function for user to start the game
    function startGame() {
        let randomDoorPicker = Math.floor(Math.random() * 3);
        const door0 = document.querySelector("#door0");
        switch (randomDoorPicker) {
            case 0:
                door0.classList.add("usersDoor");
                break;
            case 1:
                console.log(1);
                break;
            case 2:
                console.log(2);
                break;
            default:
                break;
        }
    }

    loadPage();


