// Navbar
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

//show sidebar
menuBtn.addEventListener("click", () => {
  
    sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});
// Graph
var xValues = ["Web Development", "Mobile Apps", "SEO", "Website Design", "Saas"];
var yValues = [55, 25, 44, 60, 150];
var barColors = [
  "#FFD54F",
  "#D4E157",
  "#F8BBD0",
  "#90CAF9",
  "#BA68C8"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Service Wise Sales"
    }
  }
});