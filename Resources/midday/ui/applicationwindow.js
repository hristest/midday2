
(function(){
	
	md.ui.createApplicationWindow = function(){
		
		// Wrap Window
		var win = Ti.UI.createWindow({
			layout:'horizontal'
		});
		
		// Main Content
		var leftView = Ti.UI.createView({
			width:"92%",
			backgroundColor: '#FFF'
		});
		
		var mainContentView = md.ui.createMainContentView('home');
		
		leftView.add(mainContentView);
		
		
		
		// SideBar
		var sideBarView = md.ui.createSideBarView();

		win.add(leftView);
		win.add(sideBarView);
		
		win.orientationModes = [
		    Titanium.UI.PORTRAIT,
		    Titanium.UI.UPSIDE_PORTRAIT,
		    Titanium.UI.LANDSCAPE_LEFT,
		    Titanium.UI.LANDSCAPE_RIGHT,
		]; 
		
		return win;
	};
	
})();
