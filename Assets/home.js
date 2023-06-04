// setting min value for date field

let today = new Date();
let month = today.getMonth()+1;
let day = today.getDate();   
let year = today.getFullYear();

if(month<10)
month = '0'+ month.toString();

if(day<10)
day = '0' +day.toString();

var minDate = year +'-'+month+'-'+day;
document.getElementById('date').setAttribute("min",minDate);
    console.log("minDate",minDate);
