/*
File: script.js
GUI Assignment: Homework 4
Musa Jamshed, UMass Lowell Computer Science, Musa_Jamshed@student.uml.edu
Last Modified: November 29, 2022
Description: Using jQuery with Dynamic Multiplication Table
*/

// lower and upper bounds of table
var rowStart;
var rowEnd;
var columnStart;
var columnEnd;

// function to generate the table
function generateTable(rowStart, rowEnd, columnStart, columnEnd) {
  var output = "<table><th> </th>";
  var i;
  var j;

  // casting
  rowStart = Number(document.getElementById('rowStart').value);
  rowEnd = Number(document.getElementById('rowEnd').value);
  columnStart = Number(document.getElementById('columnStart').value);
  columnEnd = Number(document.getElementById('columnEnd').value);
  
  // generate table if there are no user input errors
  if (validate(rowStart, rowEnd, columnStart, columnEnd)) {
    //row heading
    for (i = rowStart; i <= rowEnd; i++) {
      output += "<th>" + i + "</th>";
    }

    // column heading followed by rows
    for (i = columnStart; i <= columnEnd; i++) {
      output += "<tr>";
      output += "<th>" + i + "</th>";

      for (j = rowStart; j <= rowEnd; j++) {
        output = output + "<td>" + (i * j) + "</td>";
      }

      output += "</tr>";
    }

    output += "</table>";
    document.getElementById('myTable').innerHTML = output;
  }
}

// function to validate the user's input
function validate(row_start, row_end, column_start, column_end) {
  // user input error handling
  var args = [row_start, row_end, column_start, column_end];
  //var errorMessage = "<p>";
  var i;

  // iterate through user input and verify they're all numbers
  for (i = 0; i < args.length; i++) {
    if (!isFinite(args[i])) {
      //errorMessage += "Please enter numbers only";
      //document.getElementById("error").innerHTML = errorMessage + "</p>";
      return false;
    }

    if (!Number.isInteger(args[i])) {
      //errorMessage += "Please enter numbers only";
      //document.getElementById("error").innerHTML = errorMessage + "</p>";
      return false;
    }
  }

  // only allow numbers between -50 and 50
  if (row_start < -50 || row_end > 50 || column_start < -50 || column_end > 50) {
    //errorMessage += "Please only enter numbers between -50 and 50";
    //document.getElementById("error").innerHTML = errorMessage + "</p>";
    return false;
  }

  // start number must be less than end number
  if (row_start > row_end || column_start > column_end) {
    //errorMessage += "Start number must be less than end number";
    //document.getElementById("error").innerHTML = errorMessage + "</p>";
    return false;
  }

  // no errors at this point
  //document.getElementById("error").innerHTML = "";
  return true;
}