/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let splitTime = time.split(':');
  splitTime = parseInt(splitTime[0]);
  if (splitTime < 12) {
    return "Good Morning";
  } else if (splitTime < 17) {
    return "Good Afternoon";
  } else if (splitTime < 24) {
    return "Good Evening";
  }
}

function displayMessage(message) {
  let title = document.getElementById('greeting');
  title.innerText = message;
}