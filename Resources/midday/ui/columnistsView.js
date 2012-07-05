
(function(){
	
	md.ui.createColumnistsView = function(){
		
		var wrap = Ti.UI.createView({
			left:10,
			right:10,
			layout:'vertical',
			height:Ti.UI.FILL
		});
		
		// Title area
		//-------------------------------------------
		// Title
		var titlearea = Ti.UI.createView({
			layout:'horizontal',
			top:0,
			height:20
		});
		
		var tsTitle = Ti.UI.createLabel({
			text:'Columnists',
			textAlign:'center',
			color:'#ff7500',
			font:{fontSize:12},
			width:"20%",
			left:3,
			top:0
		});
		
		var seperatorL = Ti.UI.createView({
			height:4,
			width:"40%",
			backgroundImage:"/images/seperator.png",
			top:5
		});
		
		var seperatorR = Ti.UI.createView({
			height:4,
			width:"30%",
			backgroundImage:"/images/seperator.png",
			left:3,
			right:0,
			top:5
		});
		
		titlearea.add(seperatorL);
		titlearea.add(tsTitle);
		titlearea.add(seperatorR);
		
		wrap.add(titlearea);
		
		
		// Columnists
		var columnistsWrap = Ti.UI.createView({
			layout:'horizontal',
			top:0,
			width:Ti.UI.FILL
		});
		
		var columnRowsContainer = null;
		
		function reloadColumnists(ori){
			
			if(columnistsWrap.children.length == 1)
				columnistsWrap.remove(columnistsWrap.children[0]);
			
			var columnRowsContainer = Ti.UI.createView({
				layout:'horizontal',
				top:0,
				width:Ti.UI.FILL
			});
			
			var numColumns = (ori == 'portrait') ? 4 : 6;
			
			
			var url = md.app.links.columnists;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				var response = eval('(' + this.responseText + ')');
				
				var count = 0;
				for(var i in response) count++;
				
				numColumns = (count < numColumns) ? count : numColumns;
				
				for(var i = 0; i < numColumns; i++){
					var title = response[i].title;
					var summary = response[i].summary;
					
					var column = Ti.UI.createView({
						left:"2%",
						top:0,
						layout:'veritcal',
						width:(ori == 'portrait') ? "22%" : "16%"
					});
					
					var columnTitle = Ti.UI.createLabel({
						text:title,
						font: {'fontSize':$$.platformWidth * 0.02},
						color:'#015291',
						top:2,
						left:0,
						height:"25%"
					});
					
					var columnSummary = Ti.UI.createLabel({
						text:summary,
						font: {'fontSize':$$.platformWidth * 0.015},
						color:'#111',
						top:30,
						left:0,
						height:"50%"
					});
					
					column.add(columnTitle);
					column.add(columnSummary);
					
					columnRowsContainer.add(column);
				}
				columnistsWrap.add(columnRowsContainer);
			};
			
			tsLoader.open('GET', url);
			tsLoader.send();
			
		}
		
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = getOrientation(Ti.Gesture.orientation);
			
			if(ori == 'landscape'){
				reloadColumnists(ori);
				
			} else if(ori == 'portrait'){
				reloadColumnists(ori);
			}
			
			
		});
		
		wrap.add(columnistsWrap);
		
		return wrap;
		
	}
	
})();
