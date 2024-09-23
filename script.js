
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const time = `${hours} : ${minutes}`;

console.log(time);
document.querySelector(".Time").innerHTML = time;

function LockScreen() {
  document.querySelector(".darspot").classList.toggle("darspotAfter");
  document.querySelector(".udsgn").classList.toggle("udsgnAfter");

  document.querySelector(".ldsgn").classList.toggle("ldsgnAfter");

  console.log("HELLO");
}

