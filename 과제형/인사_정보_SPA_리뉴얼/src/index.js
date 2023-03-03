import App from "./app.js";

const memberDataJSON = await fetch("src/data/new_data.json");
let memberData = await memberDataJSON.json();
memberData = memberData.map((m, idx) => ({ ...m, idx }));
localStorage.setItem("personalInfo", JSON.stringify(memberData));

const $app = document.querySelector(".app");
new App($app);
