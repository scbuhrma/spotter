$(document).ready(function(){
	$("#sbutton").click(function(){


		$("#inpot").fadeOut();
		$("#search").fadeIn();
		$("#search").css("visibility", "visible");

		main();
		});



		});


function main() {
    
    
     var totalcusscount = 0;
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
            
            
     var cussArray = tweet.text.match(/fuck|\sass\s|bitch|pussy/g);
     for(var i in cussArray){
     	totalcusscount++;
     }    
     
     
     var censor = tweet.text.replace(/fuck|\sass\s|bitch|pussy/g,"*****");
     	
    
     $("#uhoh").text(totalcusscount);
            
            
	}
        
    $("#tweets").prepend($("<p>"+profile_image+' '+censor+"</p>"));    
	twitCount++;
	
	
	
        
});    





	s.start();
    


}
