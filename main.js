function startClassification() {

    navigator.mediaDevices.getUserMedia ({ audio: true, video: false});
    classifier = 
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/enJQHndIg/", {probabilityThreshold: 0.7} , modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}

var cat = 0;
var dog = 0;

function gotResults (error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "Detected voice is of - " +
        results[0].label;
        document.getElementById("result_count").innerHTML = "Detected Dog - " +dog+ "Detected Cat - " +cat;
        document.getElementById("result_label").style.colour = "rgb ("+random_number_r+"," +random_number_g+ "," +random_number_b+ ")";
        document.getElementById("result_count").style.colour = "rgb ("+random_number_r+"," +random_number_g+ "," +random_number_b+ ")";
    }
}