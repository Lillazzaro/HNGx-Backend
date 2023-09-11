const express = require("express");
const endPointTask = express();

function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  return dayOfWeek;
}

function getCurrentUTCTime() {
  const now = new Date();
  const date = now.getUTCDate().toString().padStart(2, "0");
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const currentTime = `${date}T${hours}:${minutes}:${seconds}Z`;
  return currentTime;
}

const current_day = getCurrentDayOfWeek();
const utc_time = getCurrentUTCTime();

endPointTask.get("/endpoint", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  const response = {
    slack_name: slack_name,
    current_day: current_day,
    utc_time: utc_time,
    track: track,
    github_file_url: "https://github.com/Lillazzaro/HNGx-Backend/index.js",
    github_repo_url: "https://github.com/Lillazzaro/HNGx-Backend",
    status_code: 200,
  };

  res.json(response);
});

const PORT = process.env.PORT || 3000;
endPointTask.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
