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


    /*var countDownDate = new Date(javaDate).getTimer(); //countDownTimer here <-------
    var x = setInterval(function(){
      var now = Date().getTimer();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var secounds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementsByClassName("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + secounds + "s ";

      if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("timer").innerHTML = "NEXT LAUCH COMMING UP";
      }
    }, 1000);
    console.log(countDownDate);*/ //timer end here -----------------------------
  



    if (card.timeline === null && card.timeline === "" && card.timeline) { // if value does exist 
      card.timeline = timeLine; // put default value
    }

    html += `
  <div class="card-script card-holder container">
      <div class="left-card">
      <div><h1 class="rocket-font card-title-date">${ddmmyy}</h1></div>
      <div><h3 class="rocket-font card-secound-date">${card.launch_date_unix}</h3></div>
    </div>
    <div class="right-card">
      <div><h3 class="rocket-font rocket-name">${card.rocket.rocket_name}</h3></div>
      <div><h4 class="rocket-font mission-name">${card.mission_name}</h4></div>
      <div><h5 class="rocket-font location">${card.launch_site.site_name_long}</h5></div>
    </div>
    <div class="card-more">
      <button class="btn rocket-font">More detail</button>
    </div>
  </div>`;
  });

  flightContainer.innerHTML = html;

};


