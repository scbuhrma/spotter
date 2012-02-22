$(document).ready(function(){
	$("#sbutton").click(function(){


		$("#inpot").fadeOut();
		$("#search").fadeIn();
		$("swears").fadeIn();
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
		$("swears").fadeOut();
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
            
            
     var cussArray = tweet.text.match(/fuck|FUCK|\sass\s|bitch|pussy|arse|\sbeaner\s|\sbutt-pirate\s|\schink\s|\schinc\s|clit|cock|cunt|damn|dick|douche|faggit|faggot|\sfudgepacker\s|gringo|guido|honkey|jizz|kunt|kooch|nigger|nig|piss|queef|queer|shit|Shit|slut|\sspic\s|twat|tit|whore|wetback|wop/g);
     for(var i in cussArray){
     	totalcusscount++;
     }    
     
     
     var censor = tweet.text.replace(/fuck|\sass\s|bitch|pussy|arse|\sbeaner\s|\sbutt-pirate\s|\schink\s|\schinc\s|clit|cock|cunt|damn|dick|douche|faggit|faggot|\sfudgepacker\s|gringo|guido|honkey|jizz|kunt|kooch|nigger|nig|piss|queef|queer|shit|Shit|slut|\sspic\s|twat|tit|whore|wetback|wop/g,"*****");
     	
    
     $("#uhoh").text(totalcusscount);
            
            
	}
        
    $("#tweets").prepend($("<p>"+profile_image+' '+censor+"</p>"));    
	twitCount++;
	
	
	
        
});    





	s.start();
    


}
