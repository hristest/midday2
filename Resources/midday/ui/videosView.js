
(function(){
	
	md.ui.createVideosView = function(){
		
		var wrap = Ti.UI.createView({
			top:0,
			left:0,
			width:"20%",
			height:Titanium.UI.FILL,
			layout:"vertical"
		});
		
		// ---------------------------
		

		
		var topVideosView = md.ui.createTopVideosView();
		var mateView = md.ui.createMateView();

				
		wrap.add(topVideosView);
		wrap.add(mateView);
			
		
		
		return wrap;
		
	}
	
	
})();
