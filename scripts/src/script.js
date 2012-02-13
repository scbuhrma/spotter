
function main() {
    
    
     var s  = new Spotter("twitter.search",
	{q:"Asheville",period:120},
	{buffer:true,bufferTimeOut:750});
    
	var count = true;
	var twitCount = 1;
    s.register(function(tweet) {
    	
        var profile_image = "<img src=\"" + tweet.profile_image_url+ "\" />";
	if(twitCount==11){
	    $("#tweets p:last-child").remove();
            twitCount=10;
	}
	if(count){
	$("#tweets").prepend($("<p class='green'>"+profile_image+tweet.text+"</p>").slideDown());
	}else{
	$("#tweets").prepend($("<p class='teal'>"+profile_image+tweet.text+"</p>").slideDown());
	}
        count = !count;	 	
    	twitCount++;
});    


	s.start();
    


}

main();
