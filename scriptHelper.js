// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   const div = document.getElementById("missionTarget")
   div.innerHTML = `
        <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
        <img src="${imageUrl}">
    `
};

function validateInput(testInput) {
   if (testInput === "") {
       return "Empty";
   } else if (isNaN(testInput)) {
       return "Not a Number";
   } else {
       return "Is a Number"
   }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    const formItems = [pilot, copilot, fuelLevel, cargoMass]
    const launchStatus = document.getElementById("launchStatus")
    const validateItems = formItems.map(x => validateInput(x))

    if (validateItems.includes("Empty")) {
        alert("All fields are required!");
    } else if (validateItems[0] === "Is a Number" || validateItems[1] === "Is a Number") {
        alert("Pilot and Copilot fields must be entered as strings");
    } else if (validateItems[2] === "Not a Number" || validateItems[3] === "Not a Number") {
        alert("Fuel Level and Cargo Mass must be entered as numbers.");
    } else {          
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

        function launchNotReady() {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        };

        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        if (fuelLevel < 10000 || cargoMass > 10000) {
            launchNotReady();
            if (fuelLevel < 10000) {
                fuelStatus.innerHTML = "Fuel level too low for launch";
            }
            if (cargoMass > 10000) {
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            }
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
        }

        list.style.visibility = "visible";
        return;
    };
};

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let returnedPlanets = await planetsReturned.json();
    return returnedPlanets;
};

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)]
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;