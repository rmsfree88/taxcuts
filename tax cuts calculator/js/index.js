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
  //var getPercent = salaryPercentTable(getInitialSalary());  //DONT NEED TABLE ANYMORE
  var sal = getInitialSalary()  //getPercentage();
  //var calculatedSalary = Math.round(getCalculatedSalary * Math.pow(10, 2)) / Math.pow(10, 2);


    //Calculating dollars saved and percent savings for 17 and 27 both based on EQNs from trendlines of excel charts
    sav17=Math.round(-1*Math.pow(10,-14)*Math.pow(sal,3)+3*Math.pow(10,-8)*Math.pow(sal,2)+0.0119*sal);

    per17=0.3814*Math.log(sal)-3.0634;
    per17=Math.round(per17*10)/10; //work-around to round 1 decimal place

    sav27=Math.round(-5*Math.pow(10,-15)*Math.pow(sal,2)+2*Math.pow(10,-8)*Math.pow(sal,2)+0.0025*sal);

    per27=0.2863*Math.log(sal)-2.9121;
    per27=Math.round(per27*10)/10; //work-around to round 1 decimal place

    
    //HERE ARE THE CONSTANTs FOR THE 1%
    savwealthy17 = 40328;
    perwealthy17 = 2.253;
    savwealthy27 = 33932;
    perwealthy27 = 1.3773;
    
    //Calculating what savings would have been with wealthy savings percentage
    savwouldve17 = Math.round(sav17*(perwealthy17/per17));
    savwouldve27 = Math.round(sav27*(perwealthy27/per27));
    
    //Calculating difference in savings
    savdiff17 = savwealthy17 - sav17;
    savdiff27 = savwealthy27 - sav27;
    
    //Adding commas to dollars
    sav17 = numberWithCommas(sav17);
    sav27 = numberWithCommas(sav27);
    savwouldve17 = numberWithCommas(savwouldve17);
    savwouldve27 = numberWithCommas(savwouldve27);
    savdiff17 = numberWithCommas(savdiff17);
    savdiff27 = numberWithCommas(savdiff27);
    
    document.getElementById('sav17A').innerHTML = "$" + sav17;
    document.getElementById('sav27A').innerHTML = "$" + sav27;
    document.getElementById('per17A').innerHTML = per17 + "%";
    document.getElementById('per27A').innerHTML = per27 + "%";
    
    document.getElementById('savwouldve17').innerHTML = "$" + savwouldve17;
    document.getElementById('savwouldve27').innerHTML = "$" + savwouldve27;
    document.getElementById('savdiff17').innerHTML = "$" + savdiff17;
    document.getElementById('savdiff27').innerHTML ="$" + savdiff27;
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
