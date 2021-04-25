let d = new Date();
let time = d.toLocaleDateString();
var intervalID = setInterval(function() { console.log(time); }, 1000);