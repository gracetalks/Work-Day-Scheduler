let businessHrs = ["9","10","11","12","13","14","15","16","17"];
let currentHr = moment().hour();
let displayDate = moment().format("MMM Do YY");


function displayHours(){
    $("#currentDate").append(displayDate);

    for (let i = 0; i < businessHrs.length; i++) {
        
        let row = $("<div class='row'>");
        let colDate = $("<div class='col-sm-3'>")
        
        let getBusinessHrs = businessHrs[i] + " a.m.";
        
        if(businessHrs[i] >= 12) {
            getBusinessHrs = businessHrs[i] + " p.m.";
            if(businessHrs[i] >= 13){
                getBusinessHrs = businessHrs[i] - 12 + " p.m.";
            }
            
            console.log(getBusinessHrs);

        }
        colDate.append(getBusinessHrs);
        
        
        row.append(colDate);
        $("#schedule").append(row);
    }
}


displayHours();