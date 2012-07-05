

(function(){
	
	md.ui.createMainSectionView = function(){
		
		var wrapView = Ti.UI.createView({
			top:10,
			left:10,
			right:10,
			height:"50%",
			layout:'horizontal'	
		});
		
		// Top Photos
		var topPhotosView = md.ui.createTopPhotosView();
		wrapView.add(topPhotosView);
		
		// Other Top Stories
		var otherTopStoriesView = md.ui.createOtherTopStoriesView();
		wrapView.add(otherTopStoriesView);
		
		// Videos
		var videosView = md.ui.createVideosView();
		
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = getOrientation(Ti.Gesture.orientation);
			
			if(ori == 'portrait'){
				wrapView.height = "50%";
				wrapView.add(videosView);
			} else if(ori == 'landscape'){
				wrapView.height = "35%";
				wrapView.remove(videosView);
			}
			
		});
		

		
		return wrapView;
	
	}
	
})();
