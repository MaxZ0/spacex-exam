const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  // redirect to home
}

const rocketUrl = `https://api.spacexdata.com/v3/launches/${id}`;

fetch(rocketUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const launch = json;
    let launchContainer = document.querySelector(".launch-container");
    console.log(launch);

    let missionPatch = "";
    if(launch.links.mission_patch == undefined){
      missionPatch = "./img/rocket.png";
    } else {
      missionPatch = launch.links.mission_patch;
    };


    const launchHtml = `
      <div class="launch">
        <div class="launch-patch">
          <img class="detail-img" src="${missionPatch}" alt="">
        </div>
        <div class="detail-text"
          <p>Rocket Name: <span class="value rocket-font" id="name">${launch.rocket.rocket_name}</span>
          </p>
          <p>
            Mission Name: <span class="value rocket-font" id="mission">${launch.mission_name}</span>
          </p>
          <p>
            Rocket type:<span class="value rocket-font" id="orbit">${launch.rocket.rocket_type}</span>
          </p>
          <p>
            Launch site:<span class="value rocket-font" id="launch-site">${launch.launch_site.site_name_long}</span>
          </p>
          <p>
          Launch year:<span class="value rocket-font" id="launch-site">${launch.launch_year}</span>
          </p>
        </div>
      </div>
      `;

      launchContainer.innerHTML = launchHtml;
  })
  .catch(function(error) {
    console.dir(error);
  });

  

