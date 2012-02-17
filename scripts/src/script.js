
function main() {
    
    
     var s  = new Spotter("facebook.search",
	{q:"Disc Golf",period:120},
	{buffer:true,bufferTimeOut:750});
    
	var count = true;
	var twitCount = 1;
    s.register(function(status) {
    	
        var profile_image = "<img src=\"" + status.profile_image_url+ "\" />";
	if(twitCount==11){
	    $("#tweets p:last-child").remove();
            twitCount=10;
	}
	if(count){
	$("#tweets").prepend($("<p class='green'>"+profile_image+status.text+"</p>").slideDown());
	}else{
	$("#tweets").prepend($("<p class='teal'>"+profile_image+status.text+"</p>").slideDown());
	}
        count = !count;	 	
    	twitCount++;
});    


	s.start();
    


}

main();
