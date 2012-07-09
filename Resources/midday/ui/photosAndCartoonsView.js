

(function(){
	
	md.ui.createPhotosAndCartoonsView = function(){
		
		
		var wrap = md.ui.components.createWrapView({ layout:'vertical', width:"30%" });
		
		
		
		// Photos
		var photosSectionWrap = md.ui.createPhotosView();
		wrap.add(photosSectionWrap);
		
		
		// Cartoons
		var cartoonsWrap = md.ui.createCartoonsView();
		wrap.add(cartoonsWrap);
		
		// Orientation Change
		var OldOrientation = -1;
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = md.getOrientation(Ti.Gesture.orientation);

			if(e.orientation < 1 || e.orientation > 4) return;
			
			if(OldOrientation==e.orientation) return;
 
    		// Set Old to new
    		OldOrientation=e.orientation;
			
			if(ori == 'portrait'){
				wrap.add(cartoonsWrap);
				
			} else if(ori == 'landscape'){
				wrap.remove(cartoonsWrap);
			}
			
		});
		
		
		
		
		
		
		return wrap;
		
	}
	
})();
