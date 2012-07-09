
(function(){
	
	md.ui.createColumnistsView = function(section){
		
		
		var wrap = md.ui.components.createWrapView({ layout:'vertical'});
		
		// Title
		var titleView = md.ui.components.createTitleView("columnists");
		wrap.add(titleView);
		
		
		// Columnists
		var columnistsWrap = Ti.UI.createView({
			layout:'horizontal',
			top:0,
			width:Ti.UI.FILL
		});
		
		var columnRowsContainer = null;
		
		var data = [];
		
		wrap.updateView = function(ori){
			
			if(columnistsWrap.children.length == 1)
				columnistsWrap.remove(columnistsWrap.children[0]);

			var columnRowsContainer = md.ui.components.createWrapView({ layout:'horizontal' });
			
			var numColumns = (ori == 'portrait') ? 4 : 6;
			
			var count = 0;
			for(var i in data) count++;
			
			numColumns = (count < numColumns) ? count : numColumns;
			
			for(var i = 0; i < numColumns; i++){
				var title = data[i].title;
				var summary = data[i].summary;
				
				var column = Ti.UI.createView({
					left:"2%",
					top:0,
					layout:'veritcal',
					width:(ori == 'portrait') ? "22%" : "14%"
				});

				var columnTitle = Ti.UI.createLabel(md.combine($$.headerText, { text:title, height:"25%" }));
				
				var columnSummary = Ti.UI.createLabel(md.combine($$.contentText, { top:30, height:"50%", text:summary }));
				
				column.add(columnTitle);
				column.add(columnSummary);
				
				columnRowsContainer.add(column);
			}
			columnistsWrap.add(columnRowsContainer);
			
			
		};
		
		wrap.loadContent = function(ori, section){
			
			if(!section || !md.app.links[section].columnists) section = 'home';
			
			var url = md.app.links[section].columnists;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				var response = eval('(' + this.responseText + ')');
				data = response;
				
				wrap.updateView(ori);
			};
			
			tsLoader.open('GET', url);
			tsLoader.send();
			
		}
		
		var ori = md.getOri();
		wrap.loadContent(ori, section);
		
		var OldOrientation = -1;
		
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = md.getOrientation(Ti.Gesture.orientation);
			
			if(e.orientation < 1 || e.orientation > 4) return;
			
			if(OldOrientation==e.orientation) return;
 
    		// Set Old to new
    		OldOrientation=e.orientation;
			
			if(ori == 'landscape'){
				wrap.updateView(ori);
				
			} else if(ori == 'portrait'){
				wrap.updateView(ori);
			}
			
			
		});
		
		wrap.add(columnistsWrap);
		
		return wrap;
		
	}
	
})();
