
// Main App Namespace -> md

Ti.include('/midday/main.js');

md.app.mainWindow = md.ui.createApplicationWindow();
md.app.mainWindow.open();



	// initialize to all modes
	md.app.mainWindow.orientationModes = [
	    Titanium.UI.PORTRAIT,
	    Titanium.UI.UPSIDE_PORTRAIT,
	    Titanium.UI.LANDSCAPE_LEFT,
	    Titanium.UI.LANDSCAPE_RIGHT,
	    Titanium.UI.FACE_UP,
	    Titanium.UI.FACE_DOWN
	]; 
	
	
	//
	// helper function
	//
	function getOrientation(o)
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
	        case Titanium.UI.FACE_UP:
	            return 'face up';
	        case Titanium.UI.FACE_DOWN:
	            return 'face down';
	        case Titanium.UI.UNKNOWN:
	            return 'portrait';
	    }
	}