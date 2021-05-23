// using let variable throughout entire js

// calling in an array for business hours and setting format for current hour and displaying date
let businessHrs = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
let currentHr = moment().hour();
let displayDate = moment().format("MMM Do YY");

// current date will show within display date format
function displayHours() {
    $("#currentDate").append(displayDate);

    // setting up a.m. and p.ma hours to appear in first column
    for (let i = 0; i < businessHrs.length; i++) {

        let row = $("<div class='row'>");
        let colDate = $("<div class='col-sm-3'>")

        // hours will appear a.m.
        let getBusinessHrs = businessHrs[i] + " a.m.";

        // hours will appear p.m. if greater than 12 noon
        if (businessHrs[i] >= 12) {
            getBusinessHrs = businessHrs[i] + " p.m.";
            if (businessHrs[i] >= 13) {
                getBusinessHrs = businessHrs[i] - 12 + " p.m.";
            }
        
        }
        colDate.append(getBusinessHrs);

        // creating text column in second column
        let colContent = $("<div class= 'col-sm-6'>")

        // calling in text to appear
        let textarea = $("<textarea>")
        textarea.attr("id", "textarea" + i)
        textarea.addClass("form-control"); 

        // setting classes for past, future, and present to appear in particular colors when current hour is greater, less, or equal to business hours
        if (currentHr > businessHrs[i]) {
            textarea.addClass("past");    
        }
        if (currentHr == businessHrs[i]) {
            textarea.addClass("present");
        }
        if (currentHr < businessHrs[i]) {
            textarea.addClass("future");
        }

        // calling in readd-only property into textarea
        let textareaValue = localStorage.getItem("textarea" + i)
        textarea.text(textareaValue);


        colContent.append(textarea);

        // creating save button column in column 3
        let colSave = $("<div class= 'col-sm-3'>")

        let btn = $("<button>")
        btn.addClass("saveBtn")
        btn.attr("id", "saveBtn")
        
        colSave.append(btn)


        row.append(colDate, colContent, colSave);
        $("#schedule").append(row);


    }
}

displayHours();
// when save button is clicked it will save the text value
$("#saveBtn").on("click", function(){
    for(let i = 0; i< businessHrs.length; i++){
        let textareaValue = $("#textarea"+ i).val()
        localStorage.setItem("textarea"+i, textareaValue);
    }
})