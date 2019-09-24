  $(document).ready(function () {
       var database = firebase.database();
// 2. Button for adding Employees
$("#add-employee-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var empName = $("#employee-name-input").val().trim();
    var empRole = $("#role-input").val().trim();
    // var empStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
    // var empRate = $("#rate-input").val().trim();

    // Creates local "temporary" object for holding employee data
    var newEmp = {
        name: empName,
        role: empRole,
        // start: empStart,
        // rate: empRate
    };

    // Uploads employee data to the database
    database.ref().push(newEmp);

    // Logs everything to console
    // console.log(newEmp.name);
    // console.log(newEmp.role);
    // console.log(newEmp.start);
    // console.log(newEmp.rate);

    // alert("Employee successfully added");

    // Clears all of the text-boxes
    $("#employee-name-input").val("");
    $("#role-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot) {
    // console.log(childSnapshot.val());

    // Store everything into a variable.
    var empName = childSnapshot.val().name;
    var empRole = childSnapshot.val().role;
    // var empStart = childSnapshot.val().start;
    // var empRate = childSnapshot.val().rate;

    // Employee Info
    // console.log(empName);
    // console.log(empRole);
    // console.log(empStart);
    // console.log(empRate);

    // Prettify the employee start
    // var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

    // // Calculate the months worked using hardcore math
    // // To calculate the months worked
    // var empMonths = moment().diff(moment(empStart, "X"), "months");
    // // console.log(empMonths);

    // // Calculate the total billed rate
    // var empBilled = empMonths * empRate;
    // // console.log(empBilled);

    // // Create the new row
    // var newRow = $("<tr>").append(
    //     $("<td>").text(empName),
    //     $("<td>").text(empRole),
    //     $("<td>").text(empStartPretty),
    //     $("<td>").text(empMonths),
    //     $("<td>").text(empRate),
    //     $("<td>").text(empBilled)
    // );

    // Append the new row to the table
    // $("#employee-table > tbody").append(newRow);
});
});
    

                    // < div class = "cus" >
                    //     <
                    //     form >
                    //     <
                    //     div class = "form-group" >
                    //     <
                    //     label
                    // for = "employee-name-input" > Employee Name < /label> <
                    //     input class = "form-control"
                    // id = "employee-name-input"
                    // placeholder = "Jane Doe"
                    // type = "text" >
                    //     <
                    //     /div> <
                    //     div class = "form-group" >
                    //     <
                    //     label
                    // for = "role-input" > Role < /label> <
                    //     input class = "form-control"
                    // id = "role-input"
                    // placeholder = "CEO"
                    // type = "text" >
                    //     <
                    //     !-- < /div> <
                    //     div class = "form-group" >
                    //     <
                    //     label
                    // for = "start-input" > Start Date(MM / DD / YYYY) < /label> <
                    //     input class = "form-control"
                    // id = "start-input"
                    // placeholder = "01/08/1989"
                    // type = "text" >
                    //     <
                    //     /div> --> <
                    //     div class = "form-group" >
                    //     <
                    //     label
                    // for = "rate-input" > Monthly Rate < /label> <
                    //     input class = "form-control"
                    // id = "rate-input"
                    // placeholder = "200000"
                    // type = "text" >
                    //     <
                    //     /div> <
                    //     button class = "btn btn-primary float-right"
                    // id = "add-employee-btn" > Submit < /button> <
                    //     /form> <
                    //     /div>