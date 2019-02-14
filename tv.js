
var axios = require("axios");
var fs = require("fs");

var TV = function() {
    this.findShow = function(show) {
     
        var queryUrl = "http://api.tvmaze.com/search/shows?q=" + show;
        axios.get(queryUrl).then(function(response) {
            console.log(response);

            var showName = response.data[0].show.name;
            var showGenre = response.data[0].show.genres;
            var showRating  = response.data[0].show.rating.average;
            var showNetwork = response.data[0].show.network.name;
            var showSummary = response.data[0].show.summary;

            var output = "\nShow: " + showName + "\nGenre(s): " + showGenre + "\nRating: " + showRating + "\nNetwork: " + showNetwork + "\nSummary: " + showSummary;
            var log_output = "\nShow: " + showName + "; Genre(s): " + showGenre + "; Rating: " + showRating + "; Network: " + showNetwork + "; Summary: " + showSummary;
            console.log(output);
            console.log("");

            fs.appendFile("log.txt", log_output, function(err) {
                // If an error was experienced we will log it.
                if (err) {
                    console.log(err);
                }
            });
        })
  
    };
    this.findActor = function(actor) {

        var queryUrl = "http://api.tvmaze.com/search/people?q=" + actor;
        axios.get(queryUrl).then(function(response) {

            var actorName = response.data[0].person.name;
            var actorBday = response.data[0].person.birthday;
            var actorUrl  = response.data[0].person.url;

            var output = "\nActor: " + actorName + "\nBirthday: " + actorBday + "\nURL: " + actorUrl;
            var log_output = "\nActor: " + actorName + "; Birthday: " + actorBday + "; URL: " + actorUrl;
            console.log(output);

            fs.appendFile("log.txt", log_output, function(err) {
                // If an error was experienced we will log it.
                if (err) {
                    console.log(err);
                }
            });
        })

    }
  };
  
  module.exports = TV;