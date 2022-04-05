console.log("Your index.js file is loaded correctly!");

$('#resumeButton').on("click", function(){
    $('#resumeButton').css("background-color", "#D3A28D");
    $('#resumeButton').css("width", '200px');
    $('#resumeButton').animate({left: '250px'});


    console.log("you clicked on #resumeButton");

});



