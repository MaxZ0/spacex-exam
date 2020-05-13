const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let flight_number;

if (params.has("flight_number")){
    flight_number = params.get("flight_number");
} else {
    document.location.href = "/";
}

const baseUrl = "https://api.spacexdata.com/v3/";
const upcomingLaunchesUrl = `${baseUrl}launches/upcoming`; 
const detailsUrl = `${upcomingLaunchesUrl}${flight_number}`;

fetch(detailsUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        createDetails(json);
    })
    .catch(function(){
        document.location.href = "error.html";
    });

function createDetails(details){
    console.dir(details);
    const heading = document.querySelector
}