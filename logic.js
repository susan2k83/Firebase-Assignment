
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyATTsI8OY744jY8k6aOn_yGQ1CKFNbwCmw",
    authDomain: "train-time-20d46.firebaseapp.com",
    databaseURL: "https://train-time-20d46.firebaseio.com",
    projectId: "train-time-20d46",
    storageBucket: "train-time-20d46.appspot.com",
    messagingSenderId: "974248781663"
  };
  firebase.initializeApp(config);

var trainData = firebase.database();

// 2. Populate Firebase Database with initial data (in this case, I did this via Firebase GUI)
// 3. Button for adding trains
$("#add-train-btn").on("click", function() {

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrainUnix = moment($("#first-train-input").val().trim(), "HH:mm").subtract(10, "years").format("X");
  var frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {

    name: trainName,
    destination: destination,
    firstTrain: firstTrainUnix,
    frequency: frequency
  };

  // Uploads train data to the database
  trainData.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(firstTrainUnix);
  console.log(newTrain.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

  // Determine when the next train arrives.
  return false;
});