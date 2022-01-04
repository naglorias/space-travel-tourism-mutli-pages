let myFile = "./data.json"; //Define local JSON file
//Destination variables
const destImage = document.querySelector(".destination-image img");
const destTitle = document.querySelector(".dest-details h1");
const destDescription = document.querySelector(".dest-details p");
const journeyDistance = document.querySelector(".distance h3");
const travelTime = document.querySelector(".time h3");
const destLinks = document.querySelectorAll(".dest-links span");

//Fetch destination array from JSON file and display them using showDestination function
const showDestination = (d) => {
  fetch(myFile)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.destinations.length; i++) {
        for (let j = 0; j < destLinks.length; j++) {
          if (d > data.destinations.length) {
            counter = 1;
          } else if (d < 1) {
            counter = data.destinations.length;
          }
        }
        destImage.src = data.destinations[counter - 1].images["png"];
        destTitle.textContent = data.destinations[counter - 1].name;
        destDescription.textContent =
          data.destinations[counter - 1].description;
        journeyDistance.textContent = data.destinations[counter - 1].distance;
        travelTime.textContent = data.destinations[counter - 1].travel;
      }
    });
};

//fetch method to display first object of every array when website is opened
fetch(myFile)
  .then((res) => res.json())
  .then((data) => {
    //First Destination
    destImage.src = data.destinations[0].images["png"];
    destTitle.textContent = data.destinations[0].name;
    destDescription.textContent = data.destinations[0].description;
    journeyDistance.textContent = data.destinations[0].distance;
    travelTime.textContent = data.destinations[0].travel;
  });
