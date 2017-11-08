/*
http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml

source is shared under the terms of LGPL 3 www.gnu.org/licenses/lgpl.html
*/

//this is an associative array! we are defining the values from the keys (the dropdown options) to use in the function.
var woman_percentage = new Array();
woman_percentage["latina"] = .54;
woman_percentage["black"] = .63;
woman_percentage["pacificislander"] = .62;
woman_percentage["ndn"] = .59;
woman_percentage["asian"] = .9;

//find the percentage of a white man's earnings based on the dropdown selection of a woman's ethnicity
function getPercentage() {
  var ethnicityPercentage = 0;
  var theForm = document.forms["wage-gap"];
  var selectedEthnicity = theForm.elements["womanethnicity"];

  //set ethnicityPercentage equal to value user chose
  ethnicityPercentage = woman_percentage[selectedEthnicity.value];

  //return the percentage numeral to calculate in the final result
  return ethnicityPercentage;
}

//what to do with the salary number input
//Since the user enters numeric value directly to the text box, we don’t have keep an associative array to map to a number. We can use the parseInt() function.
function getInitialSalary() {
  //reference the id of the form
  var theForm = document.forms["wage-gap"];
  //reference the text box
  var initialSalaryAmount = theForm.elements["salary-initial"];
  var initialSalary = 0;
  //if the textbox is not blank
  if (initialSalaryAmount.value != "") {
    initialSalary = parseInt(initialSalaryAmount.value);
  }

  //return the salary $$$ to calculate in the final result
  return initialSalary;
}

function calculateTotal() {
  //get the final calculated salary by calling our function!
  //then we have to round using weird math from http://www.webdeveloper.com/forum/showthread.php?222667-How-to-round-variables-up-to-2-decimal-places
  var getCalculatedSalary = getInitialSalary() * getPercentage();
  var calculatedSalary = Math.round(getCalculatedSalary * Math.pow(10, 2)) / Math.pow(10, 2);

  //display the result
  document.getElementById('salary-calculated').innerHTML = "$" + calculatedSalary + ".";
}


/* I wanted to figure out how to include "a" or "an" gramatically before the select element, dependent on which option is selected, but that seems to be, like, crazy difficult for my skill level.

http://jsfiddle.net/adamzr/3yhFS/

something with that?

function properArticle() {
  var indefiniteArticle = "an";
  document.getElementById('indefinite-article')
  .innerHTML = indefiniteArticle;
}
properArticle ();
*/
