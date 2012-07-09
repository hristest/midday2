

(function(){
	
	md.ui.createMainContentView = function(section, zindex, left){
		
		//var detailsView = Ti.UI.createView(md.combine($$.stretch,{ layout:'vertical', backgroundColor:'#FFF', zIndex:1 }));
		var newIndex = 1;
		if(zindex) newIndex = zindex;
		
		leftpos = 0;
		if(left) leftpos = left;
		
		var mainContentView = Ti.UI.createView(md.combine($$.stretch,{ layout:'vertical', backgroundColor:'#FFF', borderWidth:1, zIndex:newIndex}));
		
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
		
		mainContentView.addEventListener('swipe', function(e){
			md.ui.mainContentViewSlide(e);
		});

		return mainContentView;
		
	};
	
	md.ui.mainContentViewSlide = function(e){
		
		var leftView = md.app.mainWindow.children[0];
		var currentView = leftView.children[0];
		var viewWidth = Math.floor(leftView.size.width);
		
		if(e.type == 'click') {
			link = e.source.linkSection;
		} else if(e.type == 'swipe'){
			linkid = currentView.linkid;
			linkid++;
			
			if(linkid >= md.app.links.mapping.length) linkid = 0;
			if(linkid <= 0) linkid = md.app.links.mapping.length - 1;
			
			link = md.app.links.mapping[linkid].name; 
		}
		Ti.API.info('link:' + link);
		var section = link;
		if(!md.app.links[section]){
			section = 'home';
		}
		
		var sectionView = md.ui.createMainContentView(section, currentView.zIndex++);
		sectionView.linkid = linkid;
		leftView.add(sectionView);
		
		var slideTransition = Ti.UI.create2DMatrix().translate(-viewWidth, 0);
		currentView.animate({ transform:slideTransition, duration:300 }, function(){
			leftView.remove(leftView.children[0]);
		});
	}
	
	
})();
