$(document).ready(function(){
  $('#chart').hide();
  $("#arrival").hide();
  $("#departures").hide();
  $("#flightPlanner").hide();
});

 $("#homeBtn").on("click", function() {
  
    });

 //$("#calendarBtn").on("click", function() {
      // window.location.href = "../js/calendar.js";
   //console.log ('i am a computer')
     // });

 $("#flightBtnA").on("click", function() {
   $("#flightPlanner").show();
   $("#arrivals").show();
   $("#departures").hide();
   $("#chart").hide();
  });

  $("#flightBtnB").on("click", function(){
    $("#flightPlanner").show();
    $("#departures").show();
    $("#arrivals").hide();
    $("#chart").hide();
   });

   

  //$("#Customers").on("click", function(){
    //console.log('hi');
    //});

  $("#reportsBtn").on("click", function(){
    $("#chart").show();
    $("#departures").hide();
    $("#arrivals").hide();
   });




