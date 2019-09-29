$(document).ready( function(){

  var arr_response = {};
  var arr_list_current = 0;
  //rows in form table
  var dep_list_limit = 5;
  var dep_response = {};
  var dep_list_current = 0;
  //rows in form table
  var arr_list_limit = 5;
  //refresh scroll rate in seconds
  var refresh_scroll_seconds = 3;
  //refresh ajax pull
  var refresh_ajax_pull_mintues = 10; 


  function flightstats_arrivals_search() {
  var settings = {
    "async": true,
    "crossDomain": true,
     "url": "https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/fids/rest/v1/json/RIC/arrivals?appId=3ece2805&appKey=44557946c597aa486ebedb5f2319cb44&requestedFields=airlineName%2Cflight%2Ccity%2CcurrentTime%2Cgate%2Cremarks&includeCodeshares=false&timeWindowBegin=240&timeWindowEnd=240&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=true",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "Postman-Token": "fe117be6-abdb-40d4-8b91-f202de48687a"
    }
  }

  $.ajax(settings).done(function (response) {
    //  console.log("from ajax: " , response);
     arr_response = response;
    //  console.log("from ajax arr_response: " , arr_response);
     // arr_list_current = arr_list_limit;   
      var object_length = response.fidsData.length;
      if (object_length < arr_list_limit) {
        var panel_limit = object_length;
      }
      else {
         var panel_limit = arr_list_limit;
      }
      // console.log("arr_current_list: " , arr_list_current);
      // console.log("object_length" , object_length);
      // console.log("remaining_to_list: " , remaining_to_list);
      var display_current_msg = arr_list_current + 1; 
      var arrival_progress_msg = "Arrivals:    " + display_current_msg + "  -  " + panel_limit + "   of   " + object_length;
      $("#card-header-arrival").text(arrival_progress_msg);
      for (x = 0; x < panel_limit; x++) {
             var addAirline = response.fidsData[x].airlineName;
             var addFlight = response.fidsData[x].flight;
             var addCity = response.fidsData[x].city;
             var addStatus = response.fidsData[x].remarks;
             var addTime = response.fidsData[x].currentTime;
             var addGate = response.fidsData[x].gate;

         var newRow = $("<tr>").append(
            $("<th>").text(addAirline),
            $("<th>").text(addFlight),
            $("<th>").text(addCity),
            $("<th>").text(addStatus),
            $("<th>").text(addTime),
            $("<th>").text(addGate),
            )

            $("#arrivals-table > tbody").append(newRow);
            arr_list_current ++;
    }
   });
 };

function arrivals_form_list() {
  $("#arrivals-table > tbody").empty();
  // console.log("arr_list_current: " , arr_list_current);

  var object_length = arr_response.fidsData.length;
  // console.log("object_length: " , object_length);
  var remaining_to_list = object_length - arr_list_current;
  if (remaining_to_list === 0) {
     arr_list_current = 0;
     remaining_to_list = object_length;
  }
  if (remaining_to_list > arr_list_limit) {
    var panel_limit = arr_list_current + arr_list_limit;
  }
  else {
    var panel_limit = arr_list_current + remaining_to_list;
  }
  // console.log("arr_current_list: " , arr_list_current);
  // console.log("object_length" , object_length);
  // console.log("remaining_to_list: " , remaining_to_list);
  var display_current_msg = arr_list_current + 1; 
  var arrival_progress_msg = "Arrivals:    " + display_current_msg + "  -  " + panel_limit + "   of   " + object_length;
  $("#card-header-arrival").text(arrival_progress_msg);
  for (x = arr_list_current; x < panel_limit; x++) {
    // console.log("inside for: arr_current_list: " , arr_list_current);
    var addAirline = arr_response.fidsData[x].airlineName;
    var addFlight = arr_response.fidsData[x].flight;
    var addCity = arr_response.fidsData[x].city;
    var addStatus = arr_response.fidsData[x].remarks;
    var addTime = arr_response.fidsData[x].currentTime;
    var addGate = arr_response.fidsData[x].gate;

var newRow = $("<tr>").append(
   $("<th>").text(addAirline),
   $("<th>").text(addFlight),
   $("<th>").text(addCity),
   $("<th>").text(addStatus),
   $("<th>").text(addTime),
   $("<th>").text(addGate),
   )

   $("#arrivals-table > tbody").append(newRow);
  arr_list_current++;
};

// console.log("end of function/ arr_list_current" , arr_list_current);
}


// DEPARTURES AJAX PULL AND SCROLL UPDATES /////////////////////////////////////////////////// 
// DEPARTURES AJAX PULL AND SCROLL UPDATES /////////////////////////////////////////////////// 
// DEPARTURES AJAX PULL AND SCROLL UPDATES /////////////////////////////////////////////////// 
// DEPARTURES AJAX PULL AND SCROLL UPDATES /////////////////////////////////////////////////// 

function flightstats_departures_search() {

  var settings = {
    "async": true,
    "crossDomain": true,
     "url": "https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/fids/rest/v1/json/RIC/departures?appId=3ece2805&appKey=44557946c597aa486ebedb5f2319cb44&requestedFields=airlineName%2Cflight%2Ccity%2CcurrentTime%2Cgate%2Cremarks&includeCodeshares=false&timeWindowBegin=240&timeWindowEnd=240&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=true",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "Postman-Token": "fe117be6-abdb-40d4-8b91-f202de48687a"
    }
 }

$.ajax(settings).done(function (response) {
  var object_length = response.fidsData.length;
  dep_response = response;
  if (object_length < dep_list_limit) {
    var panel_limit = object_length;
  }
  else {
     var panel_limit = dep_list_limit;
  }
  // console.log("dep_current_list: " , dep_list_current);
  // console.log("object_length" , object_length);
  // console.log("remaining_to_list: " , remaining_to_list);
  var display_current_msg = dep_list_current + 1; 
  var departure_progress_msg = "Departures:    " + display_current_msg + "  -  " + panel_limit + "   of   " + object_length;
  $("#card-header-departures").text(departure_progress_msg);

    for (x = 0; x < panel_limit; x++) {
           var addAirline = response.fidsData[x].airlineName;
           var addFlight = response.fidsData[x].flight;
           var addCity = response.fidsData[x].city;
           var addStatus = response.fidsData[x].remarks;
           var addTime = response.fidsData[x].currentTime;
           var addGate = response.fidsData[x].gate;

       var newRow = $("<tr>").append(
          $("<th>").text(addAirline),
          $("<th>").text(addFlight),
          $("<th>").text(addCity),
          $("<th>").text(addStatus),
          $("<th>").text(addTime),
          $("<th>").text(addGate),
          )
          $("#departures-table > tbody").append(newRow);
        dep_list_current++;
  }
});
};

function departures_form_list() {
$("#departures-table > tbody").empty();
// console.log("dep_list_current: " , dep_list_current);

var object_length = dep_response.fidsData.length;
// console.log("object_length: " , object_length);
var remaining_to_list = object_length - dep_list_current;
if (remaining_to_list === 0) {
   dep_list_current = 0;
   remaining_to_list = object_length;
}
if (remaining_to_list > dep_list_limit) {
  var panel_limit = dep_list_current + dep_list_limit;
}
else {
  var panel_limit = dep_list_current + remaining_to_list;
}

// console.log("dep_current_list: " , dep_list_current);
// console.log("object_length" , object_length);
// console.log("remaining_to_list: " , remaining_to_list);
var display_current_msg = dep_list_current + 1; 
var departure_progress_msg = "Departures:    " + display_current_msg + "  -  " + panel_limit + "   of   " + object_length;
$("#card-header-departures").text(departure_progress_msg);
for (x = dep_list_current; x < panel_limit; x++) {
  var addAirline = dep_response.fidsData[x].airlineName;
  var addFlight = dep_response.fidsData[x].flight;
  var addCity = dep_response.fidsData[x].city;
  var addStatus = dep_response.fidsData[x].remarks;
  var addTime = dep_response.fidsData[x].currentTime;
  var addGate = dep_response.fidsData[x].gate;

var newRow = $("<tr>").append(
 $("<th>").text(addAirline),
 $("<th>").text(addFlight),
 $("<th>").text(addCity),
 $("<th>").text(addStatus),
 $("<th>").text(addTime),
 $("<th>").text(addGate),
 )

 $("#departures-table > tbody").append(newRow);
  dep_list_current++;
};

// console.log("end of function/ dep_list_current" , dep_list_current);
}


flightstats_arrivals_search();
flightstats_departures_search();

// var timeInterval_arr = setInterval(arrivals_form_list, 1000 * refresh_scroll_seconds);
// var timeInterval_dep = setInterval(departures_form_list, 1000 * refresh_scroll_seconds);
//var timeInterval_ajax = setInterval(arrival_ajax_refresh, 3600000 * refresh_ajax_pull_minutes);

});