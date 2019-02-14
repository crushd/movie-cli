
var fs = require("fs");
var TV = require("./TV");

var tvShow = new TV();

var action = process.argv[2];

var a = process.argv;
var search = [];

for (i = 3; i < a.length; i++) {
    search.push(process.argv[i]);
}

function logResults() {

    fs.appendFile("log.txt", text, function(err) {
        // If an error was experienced we will log it.
        if (err) {
            console.log(err);
        }
    });

}

switch (action) {

    case "show":
    tvShow.findShow(search);
    break;

    case "actor":
    tvShow.findActor(search);
    break;

}