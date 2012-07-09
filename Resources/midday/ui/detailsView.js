

(function(){
	
	md.ui.createDetailsView = function(){ 
	
		var detailsView = Ti.UI.createView(md.combine($$.stretch,{ layout:'vertical', backgroundColor:'#FFF' }));
		
		var breakingNewsView = md.ui.createBreakingNewsView();
		
		var detailsWrap = md.ui.components.createWrapView({layout:'horizontal'}),
			detailsInfoView = md.ui.createDetailsInfoView(),
			detailsSideView = md.ui.createDetailsSideView();
		
		detailsWrap.add(detailsInfoView);
		detailsWrap.add(detailsSideView);
		
		
		detailsView.add(breakingNewsView);
		detailsView.add(detailsWrap);
		
		return detailsView;
	
	}
	
})();
