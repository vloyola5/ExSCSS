$(document).ready(function(){
   $("#close").click(function(){
        $('.modal-container').css('transform','scale(0)');
    });
   $("#open").click(function(){
        $('.modal-container').css('transform','scale(1)');
    });
});