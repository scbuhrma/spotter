$(document).ready(function(){
	$("#sbutton").click(function(){
		
		
		$("#inpot").fadeOut();
		
		main();
		});
		
		
		
		});
		
		
function main() {
    
     
   	 var term = $("#term").val();
     var s  = new Spotter("twitter.search",
	{q:term,period:120},
	{buffer:true,bufferTimeOut:750});
	
	
	 $("#search").click(function(){
		
		$("#inpot").fadeIn();
		$("#tweets p").remove();
		s.stop();
		});
    
	var count = true;
	var twitCount = 1;
    s.register(function(tweet) {
    	
        var profile_image = "<img src=\"" + tweet.profile_image_url+ "\" />";
        
        
        
		
	
	$("#tweets").prepend($("<p class='teal'>"+profile_image+tweet.text.match(/[A-z]*[^,]/g)+"</p>").slideDown());
	
        
});    





	s.start();
    


}


