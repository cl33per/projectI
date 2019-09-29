$(document).ready(function () {
  $('#chart').hide();
  $('#arrival').hide();
  $('#departures').hide();
  $('#flightPlanner').hide();
  $('#calendar').hide();
});

$("#calendarBtn").on("click", function() {
  $("#calendar").show();
  $('#chart').hide();
  $("#arrival").hide();
  $("#departures").hide();
  $("#flightPlanner").hide();
});

$('#flightBtnA').on('click', function () {
  $('#flightPlanner').show();
  $('#arrivals').show();
  $('#departures').hide();
  $('#chart').hide();
  $('#calendar').hide();
});

$('#flightBtnB').on('click', function () {
  $('#flightPlanner').show();
  $('#departures').show();
  $('#calendar').hide();
  $('#arrivals').hide();
  $('#chart').hide();
});

$('#calendarBtn').on('click', function () {
  $('#calendar').show();
  $('#flightPlanner').hide();
  $('#arrivals').hide();
  $('#departures').hide();
  $('#chart').hide();

});

$('#reportsBtn').on('click', function () {
  $('#chart').show();
  $('#flightPlanner').hide();
  $('#departures').hide();
  $('#arrivals').hide();
  $('#calendar').hide();
});
