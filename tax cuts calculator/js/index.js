/*
http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml

source is shared under the terms of LGPL 3 www.gnu.org/licenses/lgpl.html
*/

//this is an associative array! we are defining the values from the keys (the dropdown options) to use in the function.

/*
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
} */



  function salaryPercentTable(initialSalary) {
    if(initialSalary<=4999) {
      return 2.2;
    } else if (initialSalary>=5000 && initialSalary<=14999) {
      return 3.3;
    } else if ((initialSalary>=15000 && initialSalary<=24999)) {
      return 4.4;
    } else if ((initialSalary>=25000 && initialSalary<=34999)) {
      return 5.5;
    } else if ((initialSalary>=35000 && initialSalary<=44999)) {
      return 6.6;
    } else if ((initialSalary>=45000 && initialSalary<=54999)) {
      return 7.7;
    }
  };



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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateTotal() {
  //get the final calculated salary by calling our function!
  //then we have to round using weird math from http://www.webdeveloper.com/forum/showthread.php?222667-How-to-round-variables-up-to-2-decimal-places
  //var getPercent = salaryPercentTable(getInitialSalary());  
  var sal = getInitialSalary()  //getPercentage();
  //var calculatedSalary = Math.round(getCalculatedSalary * Math.pow(10, 2)) / Math.pow(10, 2);

    

  
    sav17=Math.round(-1*Math.pow(10,-14)*Math.pow(sal,3)+2*Math.pow(10,-8)*Math.pow(sal,2)+0.0119*sal);

    per17=0.2774*Math.log(sal)-1.8211;
    per17=Math.round(per17*10)/10; //work-around to round 1 decimal place

    sav27=Math.round(-2*Math.pow(10,-14)*Math.pow(sal,3)+4*Math.pow(10,-8)*Math.pow(sal,2)+0.0087*sal);

    per27=-1*Math.pow(10,-12)*Math.pow(sal,2)+3*Math.pow(10,-6)*sal+0.5904;
    per27=Math.round(per27*10)/10; //work-around to round 1 decimal place

    document.getElementById("demo").innerHTML = per17;

    calculatedSalary = numberWithCommas(calculatedSalary)
    
    document.getElementById('salary-calculated').innerHTML = "$" + calculatedSalary + ".";
    document.getElementById('percent-calculated').innerHTML = getPercent + "%";
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
