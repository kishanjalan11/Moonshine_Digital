var xValues = ["First", "Second", "Third", "Fourth", "Fifth"];
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
      text: "Weekly Sales of This Month"
    }
  }
});