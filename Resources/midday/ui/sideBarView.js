

(function(){
	
	md.ui.createSideBarView = function(){
		
		var sideBarWrap = Ti.UI.createView({
			width:"7%",
			backgroundImage:"/images/sideBarGradient.png"
		});
		
		var sideBarView = Ti.UI.createTableView({
			backgroundColor:'transparent',
			separatorColor: 'transparent'
		});
		
		
		// Temp Rows
		var rows = [];
		for(var i in md.app.links.mapping){
			var row = Ti.UI.createTableViewRow({
				backgroundColor:'transparent',
				height:"12%",
				top:0,
			});
			
			var labelText = md.app.links.mapping[i].title;
			
			
			var label = Ti.UI.createLabel({
				text: labelText.toUpperCase(),
				textAlign:'center',
				color:'#FFF',
				font:{fontSize:11, fontStyle:'bold'},
				width:120
			});
			
			label.linkSection = md.app.links.mapping[i].name;
			
			label.transform = Ti.UI.create2DMatrix().rotate(-90);
			
			// View Transitions
			row.addEventListener('click', function(e){
				md.ui.mainContentViewSlide(e);
			});
			
			
			
			// ----------------------------------
			
			
			row.add(label);
			
			rows.push(row);
		}
		
		sideBarView.data = rows;
		//---------------
		
		sideBarWrap.add(sideBarView);
		
		
		return sideBarWrap;
	}
})();
