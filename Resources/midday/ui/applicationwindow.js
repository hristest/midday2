
(function(){
	
	md.ui.createApplicationWindow = function(){
		
		// Wrap Window
		var win = Ti.UI.createWindow({
			layout:'horizontal'
		});
		
		// Main Content
		var mainContentView = Ti.UI.createView({
			width:"92%",
			backgroundColor: '#FFF',
			layout:'vertical'
		});
		
		// Assembling MainContentView
		var breakingNewsView = md.ui.createBreakingNewsView();
		var topStoriesView = md.ui.createTopStoriesView();
		var mainSectionView = md.ui.createMainSectionView();
		var columnistsView = md.ui.createColumnistsView();
		
		mainContentView.add(breakingNewsView);
		mainContentView.add(topStoriesView);
		mainContentView.add(mainSectionView);
		mainContentView.add(columnistsView);
		
		
	
	
		// SideBar
		var sideBarView = md.ui.createSideBarView();
		
		
		win.add(mainContentView);
		win.add(sideBarView);
		
		return win;
	};
	
})();
