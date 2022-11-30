/*
File: validation.js
GUI Assignment: Homework 4
Musa Jamshed, UMass Lowell Computer Science, Musa_Jamshed@student.uml.edu
Last Modified: November 29, 2022
Description: Using jQuery with Dynamic Multiplication Table
*/

$().ready(function() {
    $('#form').validate({

        // only whole numbers allowed, no floating point or other characters
        // input number must be within -50 and 50
        // starting number must always be less than the ending number
        rules: {
            rowStart: {
                integer: true,
                range: [-50, 50],
                lessThan: '#rowEnd',
            },
            
            rowEnd: {
                integer: true,
                range: [-50, 50],
                greaterThan: '#rowStart'
            },

            columnStart: {
                integer: true,
                range: [-50, 50],
                lessThan: '#columnEnd'
            },

            columnEnd: {
                integer: true,
                range: [-50, 50],
                greaterThan: '#columnStart'
            },
        },

        // custom messages for each type of error
        messages: {
            rowStart: {
                required: "Please enter a whole number",
                integer: "Please enter whole numbers only",
                range: "Please only enter numbers between -50 and 50",
                lessThan: "Starting row number must be less than the end"
            },

            rowEnd: {
                required: "Please enter a whole number",
                integer: "Please enter whole numbers only",
                range: "Please only enter numbers between -50 and 50",
                greaterThan: "Ending row number must be greater than the start"
            },

            columnStart: {
                required: "Please enter a whole number",
                integer: "Please enter whole numbers only",
                range: "Please only enter numbers between -50 and 50",
                lessThan: "Starting column number must be less than the end"
            },

            columnEnd: {
                required: "Please enter a whole number",
                integer: "Please enter whole numbers only",
                range: "Please only enter numbers between -50 and 50",
                greaterThan: "Ending column number must be greater than the start"
            }
        }
    })

    // generate table if all form inputs are valid
    $('#submit').on('click', function () {
        $('#form').valid();
    });
})