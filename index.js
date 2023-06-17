let setTimeoutId = -1;

function timer(seconds, minutes, hours) {
  // Calculate the total time in milliseconds
  let totalTime = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

  // Update the timer display every second
  function updateTimerDisplay() {
      // Convert the total time to hours, minutes, and seconds
      let remainingHours = Math.floor(totalTime / (1000 * 60 * 60)).toString().padStart(2, "0");
      let remainingMinutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
      let remainingSeconds = Math.floor((totalTime % (1000 * 60)) / 1000).toString().padStart(2, "0");

      // Display the remaining time
      document.getElementById("timerShow").innerHTML = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;

      // Decrease the remaining time by one second
      totalTime -= 1000;

      // Check if the timer has reached zero
      if (totalTime < 0) {
          clearTimeout(setTimeoutId);
          document.getElementById("timerShow").innerHTML = "Time's up!";
      } else {
          // Schedule the next update after one second
          setTimeoutId = setTimeout(updateTimerDisplay, 1000);
      }
  }

  // Start the timer
  updateTimerDisplay();
}
   
function startTimer(){
    var secValue = parseInt(document.getElementById("secValue").value);
    var minValue = parseInt(document.getElementById("minValue").value);
    var hourValue = parseInt(document.getElementById("hourValue").value);
    timer(secValue, minValue, hourValue);
}

function resetTimer(){
    clearTimeout(setTimeoutId);
    document.getElementById("timerShow").innerHTML = "00:00:00";
    document.getElementById("secValue").value = "00";
    document.getElementById("minValue").value = "00"; 
    document.getElementById("hourValue").value = "00";

}

function padInputValue(input) {
  let value = input.value;
  
  if (value.length === 1 && value >= 1 && value <= 9) {
    input.value = '0' + value;
  }
}

function setPresetTime(seconds){
  document.getElementById("secValue").value = seconds;
}