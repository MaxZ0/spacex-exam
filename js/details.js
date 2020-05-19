const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("flight_number")){
  id = params.get("flight_number");
} else {
}

baseUrl = "https://api.spacexdata.com/v3/";
const rocketUrl = `${baseUrl}launches/upcoming/`;
const detailsUrl = `${rocketUrl}${id}`;


fetch(detailsUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    displayDetails(json); // calling disaplayLaunches function
    console.log("json", json);

  })
  .catch(function (error) {
    console.dir(error);
  });



function displayDetails(details) {
  console.dir(details);

  const showName = document.querySelector("#name");
  showName.innerHTML = card.rocket.rocket_name;

  const showSpecies = document.querySelector("#species");
  showSpecies.innerHTML = details.species;

  const showOrigin = document.querySelector("#origin");
  showOrigin.innerHTML = details.origin.name;

  const showLocation = document.querySelector("#location");
  showLocation.innerHTML = details.location.name;

  const showImage = document.querySelector(".details-image");
  showImage.src = details.image;
  showImage.alt = details.name;

  const tittleDetails = `${details.name}`;
  document.title = tittleDetails;
}
