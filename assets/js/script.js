let businessHrs = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
let currentHr = moment().hour();
let displayDate = moment().format("MMM Do YY");


function displayHours() {
    $("#currentDate").append(displayDate);

    for (let i = 0; i < businessHrs.length; i++) {

        let row = $("<div class='row'>");
        let colDate = $("<div class='col-sm-3'>")

        let getBusinessHrs = businessHrs[i] + " a.m.";

        if (businessHrs[i] >= 12) {
            getBusinessHrs = businessHrs[i] + " p.m.";
            if (businessHrs[i] >= 13) {
                getBusinessHrs = businessHrs[i] - 12 + " p.m.";
            }
        
        }
        colDate.append(getBusinessHrs);

        let colContent = $("<div class= 'col-sm-6'>")

        let textarea = $("<textarea>")
        textarea.attr("id", "textarea" + i)
        textarea.addClass("form-control"); 

        if (currentHr > businessHrs[i]) {
            textarea.addClass("bg-secondary");    
        }
        if (currentHr == businessHrs[i]) {
            textarea.addClass("bg-danger");
        }
        if (currentHr < businessHrs[i]) {
            textarea.addClass("bg-success");
        }

        let textareaValue = localStorage.getItem("textarea" + i)
        textarea.text(textareaValue);


        colContent.append(textarea);

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

$("#saveBtn").on("click", function(){
    for(let i = 0; i< businessHrs.length; i++){
        let textareaValue = $("#textarea"+ i).val()
        localStorage.setItem("textarea"+i, textareaValue);
    }
})