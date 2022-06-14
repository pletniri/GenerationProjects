function calculate () {

    // retrieve teh values from the amount and percentage fields in the hmtl document and store them into variables
    // using jQuery syntax, retrieves the values from the amount and percentage fields in the html document, converts them to numbers, and stores them as variables
    // $ is shorthand for jQuery
    var amount = $('#amount').val(); //getelementbyid()
    var percentage = $('#percentage').val(); //getelementbyid()

    //calculate the tip
    var tip = amount * (percentage / 100);

    // calculate the total amount
    var total = Number(amount) + tip;

    $('#tip').val( tip.toFixed(2) );
    //jQuery syntax, selects the element with id "tip" and assigns the value of tip with two decimal places
    $('#total').val( total.toFixed(2) );
    //jQuery syntax, selects the element with id "total" and assigns the value of total with two decimal places

    return false;
    //don't reload the window

}

$('#calculator').submit( calculate );
//submits the form values and calls the calculate function
//toFixed() vs. toPrecision 

// toFixed() returns digits before decimal point including digits(as per parameter) after decimal point but toPrecision() returns digits(as per parameter) before decimal and after decimal point. Difference is toFixed() count starts after decimal point but toPrecision() count starts before decimal point.