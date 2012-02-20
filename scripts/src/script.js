$(document).ready(function(){
	$("#sbutton").click(function(){


		$("#inpot").fadeOut();
		$("#search").fadeIn();

		main();
		});



		});


function main() {
    
    
     
   	 var term = $("#term").val();
     var s  = new Spotter("twitter.search",
	{q:term, period:750, lang:"en"},
	{buffer:true,bufferTimeout:5000});


	 $("#search").click(function(){

		$("#search").fadeOut();
		$("#inpot").fadeIn();
		$("#tweets p").remove();
		s.stop();
		});
    
	var count = true;
	var twitCount = 1;
    s.register(function(tweet) {
    	
        var profile_image = "<img src=\"" + tweet.profile_image_url+ "\" />";
        if(twitCount==1){
	    $("#tweets p:last-child").remove();
            twitCount=0;
	}
        
        


	$("#tweets").prepend($("<p>"+profile_image+tweet.text+"</p>"));
	twitCount++;
	
	
	
        
});    





	s.start();
    


}
