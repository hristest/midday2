

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
		
		var data = [
			'Photos',
			'Videos',
			'News',
			'Entertainment',
			'Sports',
			'Sex & Relationships',
			'LifeStyle',
			'Columnists'
		];
		
		// Temp Rows
		var rows = [];
		for(var i = 0; i < data.length; i++){
			var row = Ti.UI.createTableViewRow({
				backgroundColor:'transparent',
				height:"12%",
				top:0,
			});
			
			var label = Ti.UI.createLabel({
				text: data[i].toUpperCase(),
				textAlign:'center',
				color:'#FFF',
				font:{fontSize:11, fontStyle:'bold'},
				width:120
				
			})
			
			label.transform = Ti.UI.create2DMatrix().rotate(-90);
			
			row.add(label);
			
			rows.push(row);
		}
		
		sideBarView.data = rows;
		//---------------
		
		sideBarWrap.add(sideBarView);
		
		
		return sideBarWrap;
	}
})();
