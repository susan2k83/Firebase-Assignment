
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
$("#add-train-btn").on("click", function(event) {
  
  event.preventDefault();
  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrainUnix = moment($("#first-train-input").val().trim(), "HH:mm").subtract(1, "years").format("X");
  var frequency = $("#frequency-input").val().trim();

  trainData.ref().push({
    // Creates local "temporary" object for holding train data
    name: trainName,
    destination: destination,
    firstTrain: firstTrainUnix,
    frequency: frequency
 });

  // Uploads train data to the database



  // Logs everything to console
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainUnix);
  console.log(frequency);

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

 trainData.ref().on("child_added", function(childSnapshot, prevChildKey) 
 {

  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var firstTrainUnix = childSnapshot.val().firstTrain;
  var frequency = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(destination);
  console.log(firstTrainUnix);
  console.log(frequency);

  $("tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrainUnix + "</td><td>" + frequency + "</td><tr>");

});
