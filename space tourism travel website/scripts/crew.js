let myFile = "./data.json"; //Define local JSON file

//Crew Members variables
const memberImage = document.querySelector(".member-image img");
const memberRole = document.querySelector(".member-details h2");
const memberName = document.querySelector(".member-details h1");
const memebrBio = document.querySelector(".member-details p");
const memberLinks = document.querySelectorAll(".indicators span");

//Fetch crew array from JSON file and display them using showCrewMember function
const showCrewMember = (m) => {
  fetch(myFile)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.crew.length; i++) {
        for (let j = 0; j < memberLinks.length; j++) {
          memberLinks[j].style.background = "rgb(11, 13, 23)";

          if (m > data.crew.length) {
            counter = 1;
          } else if (m < 1) {
            counter = data.crew.length;
          }
        }
        memberImage.src = data.crew[counter - 1].images["png"];
        memberRole.textContent = data.crew[counter - 1].role;
        memberName.textContent = data.crew[counter - 1].name;
        memebrBio.textContent = data.crew[counter - 1].bio;
        memberLinks[counter - 1].style.background = "#fff";
      }
    });
};

//fetch method to display first object of every array when website is opened
fetch(myFile)
  .then((res) => res.json())
  .then((data) => {
    //First crew member
    memberImage.src = data.crew[0].images["png"];
    memberRole.textContent = data.crew[0].role;
    memberName.textContent = data.crew[0].name;
    memebrBio.textContent = data.crew[0].bio;
  });
