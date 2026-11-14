// LAB 3 - SMART PARKING
// All parking and sensor data is simulated.

var spaces = [];
var numberOfSpaces = 40;
var running = true;
var timer;

// Create 40 parking buttons and give each one a random status.
function createSpaces() {
    var parkingLot = document.getElementById("parking-lot");

    for (var i = 1; i <= numberOfSpaces; i++) {
        var button = document.createElement("button");
        button.type = "button";

        // Store the number, status, and button of this parking space.
        let space = {
            number: i,
            occupied: Math.random() < 0.5,
            button: button
        };

        spaces.push(space);
        updateSpace(space);

        // This works like onclick in our JavaScript practice files.
        button.onclick = function() {
            space.occupied = !space.occupied;
            updateSpace(space);
            updateDashboard();
            document.getElementById("selected-space").innerHTML =
                "Parking Lot " + String(space.number).padStart(2, "0") +
                " is now " + (space.occupied ? "Occupied" : "Available") + ".";
        };

        parkingLot.appendChild(button);
    }

    updateDashboard();
}

// Green means available; red means occupied.
function updateSpace(space) {
    var name = "Parking Lot " + String(space.number).padStart(2, "0");

    space.button.innerHTML = name;
    if (space.occupied) {
        space.button.className = "space occupied";
        space.button.title = name + " - Occupied";
    } else {
        space.button.className = "space available";
        space.button.title = name + " - Available";
    }
    space.button.setAttribute("aria-label", space.button.title);
}

// Count the parking spaces and update the dashboard.
function updateDashboard() {
    var occupied = 0;

    for (var i = 0; i < spaces.length; i++) {
        if (spaces[i].occupied) {
            occupied++;
        }
    }

    var total = spaces.length;
    var available = total - occupied;
    var percentage = Math.round(occupied / total * 100);

    document.getElementById("total").innerHTML = total;
    document.getElementById("available").innerHTML = available;
    document.getElementById("occupied").innerHTML = occupied;
    document.getElementById("percentage").innerHTML = percentage + "%";
}

// Simulate sensors detecting cars entering or leaving.
function simulateSensors() {
    for (var i = 0; i < 3; i++) {
        var randomNumber = Math.floor(Math.random() * spaces.length);
        var space = spaces[randomNumber];
        space.occupied = !space.occupied;
        updateSpace(space);
    }

    updateDashboard();
    document.getElementById("last-update").innerHTML = new Date().toLocaleTimeString();
    document.getElementById("selected-space").innerHTML = "Sensors updated 3 parking spaces.";
}

// Generate new random data for every space.
function randomizeSpaces() {
    for (var i = 0; i < spaces.length; i++) {
        spaces[i].occupied = Math.random() < 0.5;
        updateSpace(spaces[i]);
    }
    updateDashboard();
    document.getElementById("last-update").innerHTML = new Date().toLocaleTimeString();
    document.getElementById("selected-space").innerHTML = "All parking spaces were randomized.";
}

// Pause or restart automatic updates.
function pauseSimulation() {
    if (running) {
        clearInterval(timer);
        running = false;
        document.getElementById("pause-button").innerHTML = "Resume automatic updates";
        document.getElementById("sensor-status").innerHTML = "Paused";
    } else {
        timer = setInterval(simulateSensors, 4000);
        running = true;
        document.getElementById("pause-button").innerHTML = "Pause automatic updates";
        document.getElementById("sensor-status").innerHTML = "Running";
    }
}

// Start the simulation when the page loads.
createSpaces();
timer = setInterval(simulateSensors, 4000);
