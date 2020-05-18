/*const baseUrl = "https://api.spacexdata.com/v3/";
const upcomingLaunchesUrl = `${baseUrl}launches/upcoming`; */

baseUrl = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(baseUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    displayLaunches(json); // calling disaplayLaunches function

  })
  .catch(function (error) {
    console.dir(error);
  });


function displayLaunches(cardsArray) {
  const flightNumber = cardsArray; 
  const flightContainer = document.querySelector(".card-script");
  let html = "";

  flightNumber.forEach(function (card) {
    let timeLine = "No timeline available"; // default value, if property is empty,null or undefined
    console.log("card:", card);

    const localDate = (card.launch_date_local); //doing date here
    var javaDate = new Date(localDate);

    function pad(n){
      return n<10 ? '0'+n : n;
    };
    var currentDate = new Date(javaDate);
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var ddmmyy = pad(month + 1) + "/" + pad (date) + "/" + year;

    if (card.timeline === null && card.timeline === "" && card.timeline) { // if value does exist 
      card.timeline = timeLine; // put default value
    }

    html += `
    <div class="per-card">
      <div class="card-script card-holder container">
        <div class="left-card">
          <div><h1 class="rocket-font card-title-date">${ddmmyy}</h1></div>
          <div><h3 class="rocket-font card-secound-date">Launching date</h3></div>
        </div>
        <div class="right-card">
          <div><h3 class="rocket-font rocket-name normal-font">${card.rocket.rocket_name}</h3></div>
          <div><h4 class="rocket-font mission-name normal-font">${card.mission_name}</h4></div>
          <div><h5 class="rocket-font location normal-font">${card.launch_site.site_name_long}</h5></div>
        </div>
        <div class="card-more">
          <button class="btn rocket-font">More detail</button>
        </div>
      </div>
    </div>
    <div class="space-between"></div>`;
  });

  flightContainer.innerHTML = html;

};







