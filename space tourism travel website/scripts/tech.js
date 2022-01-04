let myFile = "./data.json"; //Define local JSON file
//Technology variables
const techImage = document.querySelector(".tech-image img");
const techName = document.querySelector(".tech-details h2");
const techDescription = document.querySelector(".tech-details p");
const techLinks = document.querySelectorAll(".on-off-btns span");

//Fetch technology array from JSON file and display them using showTechnology function

const showTechnology = (t) => {
  fetch(myFile)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.technology.length; i++) {
        for (let j = 0; j < techLinks.length; j++) {
          if (t > data.technology.length) {
            counter = 1;
          } else if (t < 1) {
            counter = data.technology.length;
          }
        }
        techImage.src = data.technology[counter - 1].images["portrait"];
        techName.textContent = data.technology[counter - 1].name;
        techDescription.textContent = data.technology[counter - 1].description;
      }
    });
};

//fetch method to display first object of every array when website is opened
fetch(myFile)
  .then((res) => res.json())
  .then((data) => {
    //First technology
    techImage.src = data.technology[0].images["portrait"];
    techName.textContent = data.technology[0].name;
    techDescription.textContent = data.technology[0].description;
  });
