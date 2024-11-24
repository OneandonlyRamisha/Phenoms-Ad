// Set the target date (24 hours from now)
const targetDate = new Date().getTime() + 24 * 60 * 60 * 40;

// Function to update the countdown every second
function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeDifference = targetDate - currentTime;

  if (timeDifference <= 0) {
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    clearInterval(countdownInterval); // Stop the countdown once expired
  } else {
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Format and display the countdown
    document.getElementById("countdown-timer").innerHTML = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize the countdown
updateCountdown();
