function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var futureYear = new Date().getFullYear() + parseInt(years)
    
    result =  "If you deposit " + principal + ",\<br\>";
    result += "at an interest rate of " + rate +"%\<br\>";
    result += "You will receive an amount of " + interest + ",\<br\>";
    result += "in the year " + futureYear + "\<br\>"

    
    document.getElementById("result").innerHTML=result;

}


function updateRate() 
{
    var rateValue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateValue+"%";
}