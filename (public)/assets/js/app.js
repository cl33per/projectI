$(document).ready(function () {
  $('#chart').hide();
  $("#arrival").hide();
  $("#departures").hide();
  $("#flightPlanner").hide();
  $("#calendar").hide();
});

$("#homeBtn").on("click", function () {
  $('#chart').hide();
  $("#arrival").hide();
  $("#departures").hide();
  $("#flightPlanner").hide();
  $("#calendar").hide();
});

$("#calendarBtn").on("click", function() {
  $("#calendar").show();
  $('#chart').hide();
  $("#arrival").hide();
  $("#departures").hide();
  $("#flightPlanner").hide();
});

$("#flightBtnA").on("click", function () {
  $("#flightPlanner").show();
  $("#arrivals").show();
  $("#departures").hide();
  $("#chart").hide();
  $("#calendar").hide();
  $('#calendar').hide();
});

$("#flightBtnB").on("click", function () {
  $("#flightPlanner").show();
  $("#departures").show();
   $('#calendar').hdie();
  $("#arrivals").hide();
  $("#chart").hide();
  $("#calendar").hide();
});


$("#Customers").on("click", function(){
  $("#departures").hide();
  $("#arrivals").hide();
  $("#chart").hide();
  $("#calendar").hide();
});

$("#calendarBtn").on("click", function () {
  $('#calendar').show();
  $("#flightPlanner").hide();
  $("#arrivals").hide();
  $("#departures").hide();
  $("#chart").hide();
});

$("#reportsBtn").on("click", function () {
  $("#chart").show();
  $("#departures").hide();
  $("#arrivals").hide();
  $("#calendar").hide();
});
