// Put Current Day and Date into currentDay id
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));


// Save button to store text content to local storage.
$('#sub1').on('click', function(){
    var msg1 = $('#msg1').val();
    localStorage.setItem("9am", msg1);
});
$('#sub2').on('click', function(){
    var msg2 = $('#msg2').val();
    localStorage.setItem("10am", msg2);
});
$('#sub3').on('click', function(){
    var msg3 = $('#msg3').val();
    localStorage.setItem("11am", msg3);
});
$('#sub4').on('click', function(){
    var msg4 = $('#msg4').val();
    localStorage.setItem("12pm", msg4);
});
$('#sub5').on('click', function(){
    var msg5 = $('#msg5').val();
    localStorage.setItem("1pm", msg5);
});
$('#sub6').on('click', function(){
    var msg6 = $('#msg6').val();
    localStorage.setItem("2pm", msg6);
});
$('#sub7').on('click', function(){
    var msg7 = $('#msg7').val();
    localStorage.setItem("3pm", msg7);
});
$('#sub8').on('click', function(){
    var msg8 = $('#msg8').val();
    localStorage.setItem("4pm", msg8);
});
$('#sub9').on('click', function(){
    var msg9 = $('#msg9').val();
    localStorage.setItem("5pm", msg9);
});



// Current Hour for time slot background colors
let currentHour = moment().format("H");


// 9 am
if(currentHour == 9){
    $('#msg1').css('background-color', 'red')
} else if(currentHour < 9){
    $('#msg1').css('background-color', 'green')
} else{
    $('#msg1').css('background-color', 'gray')
}
// 10am
if(currentHour == 10){
    $('#msg2').css('background-color', 'red')
} else if(currentHour < 10){
    $('#msg2').css('background-color', 'green')
} else{
    $('#msg2').css('background-color', 'gray')
}
// 11 am
if(currentHour == 11){
    $('#msg3').css('background-color', 'red')
} else if(currentHour < 11){
    $('#msg3').css('background-color', 'green')
} else{
    $('#msg3').css('background-color', 'gray')
}
// 12 pm
if(currentHour == 12){
    $('#msg4').css('background-color', 'red')
} else if(currentHour < 12){
    $('#msg4').css('background-color', 'green')
} else{
    $('#msg4').css('background-color', 'gray')
}
// 1 pm
if(currentHour == 13){
    $('#msg5').css('background-color', 'red')
} else if(currentHour < 13){
    $('#msg5').css('background-color', 'green')
} else{
    $('#msg5').css('background-color', 'gray')
}
// 2 pm
if(currentHour == 14){
    $('#msg6').css('background-color', 'red')
} else if(currentHour < 14){
    $('#msg6').css('background-color', 'green')
} else{
    $('#msg6').css('background-color', 'gray')
}
// 3 pm
if(currentHour == 15){
    $('#msg7').css('background-color', 'red')
} else if(currentHour < 15){
    $('#msg7').css('background-color', 'green')
} else{
    $('#msg7').css('background-color', 'gray')
}
// 4 pm
if(currentHour == 16){
    $('#msg8').css('background-color', 'red')
} else if(currentHour < 16){
    $('#msg8').css('background-color', 'green')
} else{
    $('#msg8').css('background-color', 'gray')
}
// 5 pm
if(currentHour == 17){
    $('#msg9').css('background-color', 'red')
} else if(currentHour < 17){
    $('#msg9').css('background-color', 'green')
} else{
    $('#msg9').css('background-color', 'gray')
}


let currentDay = moment().format('dddd');
// Clear local storage on new day
if(currentDay !== localStorage.getItem("Day")){
    localStorage.clear();
}
// Pull data from local storage
else { 
    $("#msg1").val(localStorage.getItem("9am"));
    $("#msg2").val(localStorage.getItem("10am"));
    $("#msg3").val(localStorage.getItem("11am"));
    $("#msg4").val(localStorage.getItem("12am"));
    $("#msg5").val(localStorage.getItem("1pm"));
    $("#msg6").val(localStorage.getItem("2pm"));
    $("#msg7").val(localStorage.getItem("3pm"));
    $("#msg8").val(localStorage.getItem("4pm"));
    $("#msg9").val(localStorage.getItem("5pm"));
};

localStorage.setItem("Day", currentDay);
