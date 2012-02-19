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
	{q:term,period:750},
	{buffer:true,bufferTimeOut:750});
	
	
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
        if(twitCount==2){
	    $("#tweets p:last-child").remove();
            twitCount=1;
	}
        
        
		
	
	$("#tweets").prepend($("<p class='teal'>"+profile_image+tweet.text.match(/[A-z]*[^,]/g)+"</p>").slideDown());
	twitCount++;
        
});    





	s.start();
    


}


