

(function(){
	
	md.ui.createMainSectionView = function(section){
		
		var wrapView = Ti.UI.createView({
			top:10,
			left:10,
			right:10,
			height:"50%",
			layout:'horizontal'	
		});
		
		// Top Photos
		var topPhotosView = md.ui.createPhotosAndCartoonsView(section);
		wrapView.add(topPhotosView);
		
		// Other Top Stories
		var otherTopStoriesView = md.ui.createOtherTopStoriesView(section);
		wrapView.add(otherTopStoriesView);
		
		var OldOrientation = -1;
		// Videos
		var videosView = md.ui.createVideosView();
		wrapView.add(videosView);
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = md.getOrientation(Ti.Gesture.orientation);
			if(e.orientation < 1 || e.orientation > 4) return;
			
			if(OldOrientation==e.orientation) return;
 
    		// Set Old to new
    		OldOrientation=e.orientation;
			Ti.API.info('Videos: ' + ori);
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
