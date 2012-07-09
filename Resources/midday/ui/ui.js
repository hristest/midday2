
(function(){
	
	md.ui = {};
	
	
	// Mixin ---------------------------------------------------
	var empty = {};
	function mixin(/*Object*/ target, /*Object*/ source){
		var name, s, i;
		for(name in source){
			s = source[name];
			if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))){
				target[name] = s;
			}
		}
		return target; // Object
	};
	md.mixin = function(/*Object*/ obj, /*Object...*/ props){
		if(!obj){ obj = {}; }
		for(var i=1, l=arguments.length; i<l; i++){
			mixin(obj, arguments[i]);
		}
		return obj; // Object
	};
	
	// Combine -------------------------------------------------
	md.combine = function(/*Object*/ obj, /*Object...*/ props) {
		var newObj = {};
		for(var i=0, l=arguments.length; i<l; i++){
			mixin(newObj, arguments[i]);
		}
		return newObj;
	};
	
	// -------------------------------------------------
	
	md.getOrientation = function(o)
	{
	    switch (o)
	    {
	        case Titanium.UI.PORTRAIT:
	            return 'portrait';
	        case Titanium.UI.UPSIDE_PORTRAIT:
	            return 'portrait';
	        case Titanium.UI.LANDSCAPE_LEFT:
	            return 'landscape';
	        case Titanium.UI.LANDSCAPE_RIGHT:
	            return 'landscape';
	        case Titanium.UI.UNKNOWN:
	            return 'portrait';
	    }
	}
		
	md.getOri = function(){
		var pWidth = Ti.Platform.displayCaps.platformWidth;
		var pHeight = Ti.Platform.displayCaps.platformHeight;
		var oriCurrent;
		if (pWidth > pHeight) {
		    var oriCurrent = 'landscape';
		} else {
		    var oriCurrent = 'portrait';    
		}
		
		return oriCurrent;
	}
		
	
	
	
	
})();

Ti.include('/midday/ui/styles.js');
Ti.include('/midday/ui/components.js');

Ti.include('/midday/ui/breakingNewsView.js');
Ti.include('/midday/ui/sideBarView.js');
Ti.include('/midday/ui/topStoriesView.js');
Ti.include('/midday/ui/photosView.js');
Ti.include('/midday/ui/cartoonsView.js');
Ti.include('/midday/ui/photosAndCartoonsView.js');
Ti.include('/midday/ui/otherTopStoriesView.js');
Ti.include('/midday/ui/topVideosView.js');
Ti.include('/midday/ui/mateView.js');
Ti.include('/midday/ui/videosView.js');
Ti.include('/midday/ui/detailsView.js');
Ti.include('/midday/ui/detailsInfoView.js');
Ti.include('/midday/ui/detailsSideView.js');
Ti.include('/midday/ui/detailsView.js');
Ti.include('/midday/ui/mainSectionView.js');
Ti.include('/midday/ui/columnistsView.js');
Ti.include('/midday/ui/mainContentView.js');
Ti.include('/midday/ui/applicationwindow.js');


