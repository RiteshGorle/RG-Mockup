
/*************************  Circular Progress Bar******************************/

var slider = document.getElementById("defaultRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider1 = document.getElementById("myRange");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}





/******************** Stacked Chart ********************/

var xValues = ["20", "25", "30", "35", "40","60", "65",];
var yValues = [80, 100, 120, 180, 210, 260, 300,];
var barColors = ["#4d4dff", "#4d4dff","#4d4dff","#4d4dff","#4d4dff","#4d4dff","#4d4dff"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,

      data: yValues
    }]
  },


  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Contributions Overtime"
    }

  }
});
  