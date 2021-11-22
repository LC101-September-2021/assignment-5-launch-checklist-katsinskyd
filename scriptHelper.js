// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "") {
       return "Empty";
   } else if (isNaN(testInput)) {
       return "Not a Number";
   } else {
       return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    const formItems = [pilot, copilot, fuelLevel, cargoMass]
    const validateItems = formItems.map(x => validateInput(x))
    if (validateItems.includes("Empty")) {
        alert("All fields are required!");
    } else if (validateItems[0] === "Is a Number" || validateItems[1] === "Is a Number") {
        alert("Pilot and Copilot fields must be entered as strings");
    } else if (validateItems[2] === "Not a Number" || validateItems[3] === "Not a Number") {
        alert("Fuel Level and Cargo Mass must be entered as numbers.");
    } else {          
        list[1].innerHTML = `Pilot ${pilot} Ready`;
        list[2].innerHTML = `Co-pilot ${copilot} Ready`;

        function launchNotReady() {
            list[0].innerHTML = "Shuttle not ready for launch";
            list[0].style.color = "red";
        };

        if (fuelLevel < 10000) {
            list[3].innerHTML = "There is not enough fuel for the journey.";
            launchNotReady();
        } else if (cargoMass > 10000) {
            list[4].innerHTML = "There is too much mass for the shuttle to take off.";
            launchNotReady();
        } else {
            list[0].innerHTML = "Shuttle is ready for launch";
            list[0].style.color = "green";
        };

        document.getElementById("faultyItems").style.visibility = "visible";
        return;
    };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;