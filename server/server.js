const fs = require("fs"),
    path = require("path");

let chirps = [
    {
        name: "issac",
        message: "hello!"
    },
    {
        name: "jessica",
        message: "hello!"
    },
    {
        name: "hank",
        message: "hello!"
    },
    {
        name: "lordy",
        message: "hello!"
    },
    {
        name: "issac",
        message: "hello!"
    },

];

const chirpsData = JSON.stringify(chirps);
fs.writeFile("./chirps.json", chirpsData, () => console.log("done"));

fs.readFile("./chirps.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
});
