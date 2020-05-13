const baseUrl = "https://api.spacexdata.com/v3/";
const upcomingLaunchesUrl = `${baseUrl}launches/upcoming`; 

fetch(upcomingLaunchesUrl)
    .then(function(response){
        return response.json();
})
    .then(function(json){
        console.dir(json);
})
    .catch(function(error){
        console.dir(error);
});

/*let titleDate = "launch_date_utc";*/

/*const titleDate = document.querySelectorAll(".launch_date_utc");

const queryString = document.location.search;

trying to find this -> launch_date_utc
*/

function displayTitleDate(upcomingLaunchesUrl){
    console.log(displayTitleDate);
    const cardHolderScript = document.querySelector(".card-script"); 

    let html = "";

    for (let i = 0; i < upcomingLaunchesUrl.length; i++){
        if(!upcomingLaunchesUrl[i].launch_date_utc){
            continue;
        }
        console.log(upcomingLaunchesUrl[i].launch_date_utc);
    }

    html += `
    <div class="left-card">
      <div><h1 class="rocket-font card-title-date">${upcomingLaunchesUrl[i].launch_date_utc}</h1></div>
      <div><h3 class="rocket-font card-secound-date">01-05-2020</h3></div>
    </div>
    <div class="right-card">
      <div><h3 class="rocket-font rocket-name">FALCON-42</h3></div>
      <div><h4 class="rocket-font mission-name">Starlink</h4></div>
      <div><h5 class="rocket-font location">Cap Canaveral Air Force Space Launch Complex 40</h5></div>
    </div>
    <div class="card-more">
      <button class="btn rocket-font">More detail</button>
    </div>`;


    cardHolderScript.innerHTML = html;

}









function displayElephants(elephants) {
    console.log(elephants);
    const elephantContainer = document.querySelector(".elephant-container");

    let html = "";


    for (let i = 0; i < elephants.length; i++) {

        if (!elephants[i].name) {

            continue;
        }

        console.log(elephants[i].dod);

        let dateOfDeath = "Unkown";


        if (elephants[i].dod !== "-") {
            dateOfDeath = elephants[i].dod;
        }

        html += `<div>
                    <div class="image" style="background-image: url(${elephants[i].image});"></div>
                    <h3>${elephants[i].name}</h3>
                    <p>Date of birth: ${elephants[i].dob}</p>                    
                    <p>Date of death: ${dateOfDeath}</p>
                    <a href="detail.html?name=${elephants[i].name}">Details</a>
                </div>`;
    }

    elephantContainer.innerHTML = html;
}