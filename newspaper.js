let updateWidget = function(data) {
    console.log("data", data);
    let currentTemp = data.main.temp.toFixed(0)
    document.getElementById("card-text").innerHTML = "It is " + currentTemp + " degrees outside";
    let currentCity = data.name
    document.getElementById("card-title").innerHTML = currentCity;
    let currentWeatherIcon = data.weather[0].icon
    document.getElementById("currentWeatherIcon").src = "http://openweathermap.org/img/w/" + currentWeatherIcon + ".png";

};
      let getWeather = function(info) {
      console.log(info)
      window.myInfo = info
      let latitude = info.coords.latitude.toFixed(4);
      let longitude = info.coords.longitude.toFixed(4);
      let apiKey = 'd146ab33e1eb5fdc41051c7728dc79e1'; // REPLACE THIS VALUE with your own key.

      let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
      weatherServiceURL += 'lat=' + latitude
      weatherServiceURL += '&lon=' + longitude
      weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

      fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
  };
      let currentLocation = function(event) {
      console.log ("Starting handlePostion")
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(getWeather);
      console.log ("Ending handlePostion")
    }
    let updateQuoteWidget = function(quoteData) {
        console.log("quoteData", quoteData);
        let quote = quoteData[0].quote
        document.getElementById("comicQuote").innerHTML = quote;
        let currentCharacter = quoteData[0].character
        document.getElementById("cardQuoter").innerHTML = currentCharacter;
        let currentQuoterIcon = quoteData[0].image
        document.getElementById("currentQuoterIcon").src = currentQuoterIcon
      }
      let funnyTime = function(event) {
      fetch('https://thesimpsonsquoteapi.glitch.me/quotes').then(convertToJSON).then(updateQuoteWidget)
      }
      let updateNasaPhotoWidget = function(nasaPhotoData) {
          console.log("nasaPhotoData", nasaPhotoData);
          let nasaPhotoOfTheDayTitle = nasaPhotoData.title
          document.getElementById("nasaPhotoOfTheDayTitle").innerHTML = nasaPhotoOfTheDayTitle;
          let nasaPhotoDescription = nasaPhotoData.explanation
          document.getElementById("nasaPhotoOfTheDayDescription").innerHTML = nasaPhotoDescription;
          let nasaPhotoOfTheDay = nasaPhotoData.url
          document.getElementById("nasaPhotoOfTheDay").src = nasaPhotoOfTheDay
        }
        let getNewNasaPhoto = function(event) {
        fetch('https://api.nasa.gov/planetary/apod?api_key=5hkKcQ3txvC6e1kIl1G0BfKBJdi9uvntUc2ZbqdO').then(convertToJSON).then(updateNasaPhotoWidget)
        }
        let updategetBBCNewsWidget = function(bbcNewsData) {
            console.log("bbcNewsData", bbcNewsData);
            let getBBCNewsTitle = bbcNewsData.articles[0].title
            document.getElementById("bbcNewsTitle").innerHTML = getBBCNewsTitle;
            let bbcNewsDescription = bbcNewsData.articles[0].description + "..."
            document.getElementById("bbcNewsArticle").innerHTML = bbcNewsDescription;
            let getBBCNewsPhoto = bbcNewsData.articles[0].urlToImage
            document.getElementById("bbcNewsImage").src = getBBCNewsPhoto
            let readMoreOnBBC = bbcNewsData.articles[0].url
            document.getElementById("bbcReadMore").href = readMoreOnBBC
            let readMoreOnBBC1 = bbcNewsData.articles[1].url
            document.getElementById("bbcReadMore1").href = readMoreOnBBC1
            let readMoreOnBBC1Title = bbcNewsData.articles[1].title
            document.getElementById("bbcReadMore1").text = readMoreOnBBC1Title
            let readMoreOnBBC2 = bbcNewsData.articles[2].url
            document.getElementById("bbcReadMore2").href = readMoreOnBBC2
            let readMoreOnBBC2Title = bbcNewsData.articles[2].title
            document.getElementById("bbcReadMore2").text = readMoreOnBBC2Title
            let readMoreOnBBC3 = bbcNewsData.articles[3].url
            document.getElementById("bbcReadMore3").href = readMoreOnBBC3
            let readMoreOnBBC3Title = bbcNewsData.articles[3].title
            document.getElementById("bbcReadMore3").text = readMoreOnBBC3Title
            let readMoreOnBBC4 = bbcNewsData.articles[4].url
            document.getElementById("bbcReadMore4").href = readMoreOnBBC4
            let readMoreOnBBC4Title = bbcNewsData.articles[4].title
            document.getElementById("bbcReadMore4").text = readMoreOnBBC4Title
            let readMoreOnBBC5 = bbcNewsData.articles[5].url
            document.getElementById("bbcReadMore5").href = readMoreOnBBC5
            let readMoreOnBBC5Title = bbcNewsData.articles[5].title
            document.getElementById("bbcReadMore5").text = readMoreOnBBC5Title
          }
          let getBBCNews = function(event) {
          fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f83bc92fbd45489d8d538f786de05d78').then(convertToJSON).then(updategetBBCNewsWidget)
          }

$("#get_forecast").on("click", currentLocation)
$("#getNewQuote").on("click", funnyTime)
$("#getNewNasaPhoto").on("click", getNewNasaPhoto)
$("#getBBCNews").on("click", getBBCNews)
////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
