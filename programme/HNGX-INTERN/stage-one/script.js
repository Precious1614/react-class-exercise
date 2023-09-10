
const slackUserName = document.querySelector('[data-testid="slackUserName"]');
const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
const myTrack = document.querySelector('[data-testid="myTrack"]');
const githubURL = document.querySelector('[data-testid="githubURL"]');

//DOWk
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];
currentDayOfTheWeek.textContent = dayOfWeek;

//current UTC time
function updateUTCTime() {
  const utcTime = Date.now();
  currentUTCTime.textContent = `UTC Time: ${utcTime}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);

//myGitHub URL
myTrack.textContent = "Frontend";
githubURL.href = "https://github.com/yourusername/your-repo";
