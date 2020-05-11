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
    console.log(upcomingLaunchesUrl);
    const rocketContainer = document.querySelector("container");
    let html = "";

    for(let i = 0; i < upcomingLaunchesUrl.length; i++){
        if(!upcomingLaunchesUrl[i].launch_date_utc){
            continue;
        }
        console.log(upcomingLaunchesUrl[i].launch_date_utc);
    }


}