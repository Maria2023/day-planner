
var today = $("#currentDay");
var timeBlockDiv = $(".time-block")


function startSch(){
   
    today.text(moment().format('dddd, MMMM Do'));
    
    setTextClass();
    loadLocalSaved();
}


function setTextClass(){
    
    $.each(timeBlockDiv, function(index, value){
        
        var textClass = "";
        
        if ($(value).attr('time') == moment().format('HH')){
            
            textClass="present";
        }
        
        else if($(value).attr('time') < moment().format('HH')){
            
            textClass="past";
        }
        
        else if ($(value).attr('time') > moment().format('HH')){
        
            textClass="future";
        }
        
        $(value).addClass(textClass);
    });
}


function loadLocalSaved(){
    $.each(timeBlockDiv, function(index, value){
        $(value).find("textarea").val(localStorage.getItem($(value).attr('time')))
    });
}


$('.saveBtn').on('click',function() {
    localStorage.setItem(
       
        $(this).parent().attr('time')
      
        ,$(this).parent().find('textarea').val());
});
    

startSch();