

(function(){
	
	md.ui.createMainContentView = function(section, zindex, left){
		
		//var detailsView = Ti.UI.createView(md.combine($$.stretch,{ layout:'vertical', backgroundColor:'#FFF', zIndex:1 }));
		var newIndex = 1;
		if(zindex) newIndex = zindex;
		
		leftpos = 0;
		if(left) leftpos = left;
		
		var mainContentView = Ti.UI.createView(md.combine($$.stretch,{ layout:'vertical', backgroundColor:'#FFF', zIndex:newIndex,  left:leftpos}));

		//leftView.add(detailsView);

		// Assembling MainContentView
		var breakingNewsView = md.ui.createBreakingNewsView(section);
		var topStoriesView = md.ui.createTopStoriesView(section);
		var mainSectionView = md.ui.createMainSectionView(section);
		var columnistsView = md.ui.createColumnistsView(section);
		

		mainContentView.add(breakingNewsView);
		mainContentView.add(topStoriesView);
		mainContentView.add(mainSectionView);
		mainContentView.add(columnistsView);
		
		
		
		
		
		return mainContentView;
		
	}
	
	
})();
