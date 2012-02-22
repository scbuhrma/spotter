$(document).ready(function(){
	$("#sbutton").click(function(){


		$("#inpot").fadeOut();
		$("#search").fadeIn();
		$("#swears").fadeIn();
		$("#search").css("visibility", "visible");
		$("#swears").css("visibility", "visible");

		main();
		});
		
		$("#help").click(function(){

		$("#search").fadeOut();
		$("#inpot").fadeOut();
		$("#swears").fadeOut();
		$("#title").fadeOut();
		$("#tweets p").remove();
		$("#apple").css("visibility", "visible");
		$("#orange").css("visibility", "hidden");
		$("#hreturn").css("visibility", "visible");
		$("#areturn").css("visibility", "hidden");
		$("#help").css("visibility", "hidden");
		$("#jesus").css("visibility", "visible");
		s.stop();
		});
		
		$("#jesus").click(function(){

		$("#search").fadeOut();
		$("#inpot").fadeOut();
		$("#swears").fadeOut();
		$("#title").fadeOut();
		$("#tweets p").remove();
		$("#orange").css("visibility", "visible");
		$("#apple").css("visibility", "hidden");
		$("#areturn").css("visibility", "visible");
		$("#hreturn").css("visibility", "hidden");
		$("#areturn").css("visibility", "visible");
		$("#jesus").css("visibility", "hidden");
		$("#help").css("visibility", "visible");
		s.stop();
		});
		
		$("#hreturn").click(function(){
		
		$("#title").fadeIn();
		$("#inpot").fadeIn();
		$("#apple").css("visibility", "hidden");
		$("#hreturn").css("visibility", "hidden");
		$("#help").css("visibility", "visible");
		s.stop();
		});
		
		$("#areturn").click(function(){

		$("#title").fadeIn();
		$("#inpot").fadeIn();
		$("#orange").css("visibility", "hidden");
		$("#areturn").css("visibility", "hidden");
		$("#jesus").css("visibility", "visible");
		s.stop();
		});
		});


function main() {
    
    
     var totalcusscount = 0;
   	 var term = $("#term").val();
     var s  = new Spotter("twitter.search",
	{q:term, period:750, lang:"en"},
	{buffer:true,bufferTimeout:7000});


	 $("#search").click(function(){

		$("#search").fadeOut();
		$("#inpot").fadeIn();
		$("#swears").fadeOut();
		$("#tweets p").remove();
		s.stop();
		});
		
	$("#help").click(function(){

		$("#search").fadeOut();
		$("#inpot").fadeOut();
		$("#swears").fadeOut();
		$("#title").fadeOut();
		$("#tweets p").remove();
		$("#apple").css("visibility", "visible");
		$("#orange").css("visibility", "hidden");
		$("#hreturn").css("visibility", "visible");
		$("#areturn").css("visibility", "hidden");
		$("#help").css("visibility", "hidden");
		$("#jesus").css("visibility", "visible");
		s.stop();
		});
		
		$("#jesus").click(function(){

		$("#search").fadeOut();
		$("#inpot").fadeOut();
		$("#swears").fadeOut();
		$("#title").fadeOut();
		$("#tweets p").remove();
		$("#orange").css("visibility", "visible");
		$("#apple").css("visibility", "hidden");
		$("#areturn").css("visibility", "visible");
		$("#hreturn").css("visibility", "hidden");
		$("#areturn").css("visibility", "visible");
		$("#jesus").css("visibility", "hidden");
		$("#help").css("visibility", "visible");
		s.stop();
		});
		
		$("#hreturn").click(function(){
		
		$("#title").fadeIn();
		$("#inpot").fadeIn();
		$("#apple").css("visibility", "hidden");
		$("#hreturn").css("visibility", "hidden");
		$("#help").css("visibility", "visible");
		s.stop();
		});
		
		$("#areturn").click(function(){

		$("#title").fadeIn();
		$("#inpot").fadeIn();
		$("#orange").css("visibility", "hidden");
		$("#areturn").css("visibility", "hidden");
		$("#jesus").css("visibility", "visible");
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
