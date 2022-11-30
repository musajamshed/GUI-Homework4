/*
File: ui.js
GUI Assignment: Homework 4
Musa Jamshed, UMass Lowell Computer Science, Musa_Jamshed@student.uml.edu
Last Modified: November 29, 2022
Description: Using jQuery with Dynamic Multiplication Table
*/

// variables to help manage tabs
var counter = 2;
var maxTables = 20;

// saving the table
function saveTable() {
    var ul = tabs.find('ul');
    var newTable = $('#myTable').html();
    var tableName = "[" + $('#rowStart').val() + "," + $('#rowEnd').val()+ "] x [" + $('#columnStart').val() + "," + $("#columnEnd").val() + "]";

    // error handling for too many tabs
    if (counter > maxTables) {
        let message = "You can only save up to 20 tables.";
        $('#tableMessage').append(message);
        $('#tableMessage').css({
            "display" : "inline",
            "line-height" : "1.5em"
        });
        return;
    }

    // add table to the tabs
    $('<li><a href="#fragment-' + counter + '"><span>'+ tableName +'</span></a></li>').appendTo(ul);
    $('#frags').append('<div id="fragment-' + counter + '">' + newTable + '</div>');

    counter++;

    tabs.tabs('refresh');
}

// sliders with a range of -50 to 50
$('#rowSlider1').slider({
    range: "min",
    value: 0,
    min: -50,
    max: 50,
    step: 1,
    // update table dynamically according to the slider
    slide: function(event, ui) {
        $('#rowStart').val(ui.value);
        $('#submitButton').trigger('click');
    }
});

// update table according to the input box
$('#rowStart').change(function () {
    var value = this.value;
    $('#rowSlider1').slider('value', parseInt(value));

    selector = $('#' + this.id.split('_'[0]));
    selector.slider('value', value);
    $('#submitButton').trigger('click');
});

// slider for row end
$('#rowSlider2').slider({
    range: "min",
    value: 0,
    min: -50,
    max: 50,
    step: 1,
    slide: function(event, ui) {
        $('#rowEnd').val(ui.value);
        $('#submitButton').trigger('click');
    }
});

// dynamically update rowEnd
$('#rowEnd').change(function () {
    var value = this.value;
    $('#rowSlider2').slider('value', parseInt(value));

    selector = $('#' + this.id.split('_'[0]));
    selector.slider('value', value);
    $('#submitButton').trigger('click');
});

// slider for column start
$('#columnSlider1').slider({
    range: "min",
    value: 0,
    min: -50,
    max: 50,
    step: 1,
    slide: function(event, ui) {
        $('#columnStart').val(ui.value);
        $('#submitButton').trigger('click');
    }
});

// dynamically update column start
$('#columnStart').change(function () {
    var value = this.value;
    $('#columnSlider1').slider('value', parseInt(value));

    selector = $('#' + this.id.split('_'[0]));
    selector.slider('value', value);
    $('#submitButton').trigger('click');
});

// slider for column end
$('#columnSlider2').slider({
    range: "min",
    value: 0,
    min: -50,
    max: 50,
    step: 1,
    slide: function(event, ui) {
        $('#columnEnd').val(ui.value);
        $('#submitButton').trigger('click');
    }
});

// dynamically update column end
$('#columnEnd').change(function () {
    var value = this.value;
    $('#columnSlider2').slider('value', parseInt(value));
    
    selector = $('#' + this.id.split('_'[0]));
    selector.slider('value', value);
    $('#submitButton').trigger('click');
});

// tabs initilization
var tabs = $('#tabs').tabs();

$('#tabs').tabs({
    activate: function(event, ui) {
        $('#delete').on('click', function() {
            $(this).remove();
        })
    }
});

// save table if the form is valid
$('#save').on('click', function () {
    if (!($('#form').valid())) {
        return;
    }
    saveTable();
    console.log("Table Created");
});

// deleting tabs
$('#deleteButton').on('click', function() {
    console.log('Delete Button Clicked');
    if ($('li').is(".ui-state-active")) {
        $(".ui-state-active").remove();
    }
})

tabs.delegate("span.ui-icon-close", "click", function() {
    var panelId = $(this).closest("li").remove().attr("aria-controls");
    $("#" + panelId).remove();
    tabs.tabs("refresh");
});