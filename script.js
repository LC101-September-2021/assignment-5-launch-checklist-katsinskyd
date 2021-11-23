// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    const list = [document.getElementById("launchStatus"), document.getElementById("pilotStatus"), 
        document.getElementById("copilotStatus"), document.getElementById("fuelStatus"), document.getElementById("cargoStatus")]

    document.querySelector("form").addEventListener("submit", function(event) {
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        event.preventDefault();
    });
    
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       console.log(planet);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
});