
/*const baseUrl = "https://api.spacexdata.com/v3/";
const upcomingLaunchesUrl = `${baseUrl}launches/upcoming`; */

baseUrl = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(baseUrl)
    .then(function(response){
        return response.json();
})
    .then(function(json){  
        displayLaunches(json);

})
    .catch(function(error){
        console.dir(error);
});


function displayLaunches (cardsArray){
    const flightNumber = cardsArray.flight_number;
    console.dir(cardsArray);

    const flightContainer = document.querySelector(".card-script");

    let html = "";

    flightNumber.forEach(function(card){
        let type = "unknown";
        if (card.type != "" && card.type != undefined){
            type = card.type;
        }
        html += `<div class="left-card">
          <div><h1 class="rocket-font card-title-date">${card[i].launch_date_utc}</h1></div>
          <div><h3 class="rocket-font card-secound-date">${card[i].launch_date_unix}</h3></div>
        </div>
        <div class="right-card">
          <div><h3 class="rocket-font rocket-name">${card[i].rocket_name}</h3></div>
          <div><h4 class="rocket-font mission-name">${card[i].mission_name}</h4></div>
          <div><h5 class="rocket-font location">${card[i].site_name_long}</h5></div>
        </div>
        <div class="card-more">
          <button class="btn rocket-font">More detail</button>
        </div>`;


    });

    flightContainer.innerHTML = html;

};

