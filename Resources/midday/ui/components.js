

(function(){
	
	md.ui.components = {};
	
	md.ui.components.createTitleView = function(_title, sep){
		
		var titleView = Ti.UI.createView($$.titleView),
			titleLabel = Ti.UI.createLabel(md.combine($$.titleText, { text: L(_title) })),
			seperator = Ti.UI.createView($$.seperator);

		titleView.add(seperator);
		titleView.add(titleLabel);

		return titleView;
	};
	
	md.ui.components.createWrapView = function(props){
		
		var wrapView = Ti.UI.createView(md.combine($$.wrapView, props));
		return wrapView;
		
	}
	
})();
