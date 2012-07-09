

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
			{ name:'photos', title:'Photos' },
			{ name:'videos', title:'Videos'},
			{ name:'news', title:'News'},
			{ name:'entertainment', title:'entertainment'},
			{ name:'sports', title:'Sports'},
			{ name:'relationships', title:'Sex & Relationships'},
			{ name:'lifestyle', title:'lifestyle'},
			{ name:'columnists', title:'columnists'}
		];
		
		// Temp Rows
		var rows = [];
		for(var i in data){
			var row = Ti.UI.createTableViewRow({
				backgroundColor:'transparent',
				height:"12%",
				top:0,
			});
			
			var labelText = data[i].title;
			
			
			var label = Ti.UI.createLabel({
				text: labelText.toUpperCase(),
				textAlign:'center',
				color:'#FFF',
				font:{fontSize:11, fontStyle:'bold'},
				width:120
			});
			
			label.linkSection = data[i].name;
			
			label.transform = Ti.UI.create2DMatrix().rotate(-90);
			
			// View Transitions
			row.addEventListener('singletap', function(e){
				var leftView = md.app.mainWindow.children[0];
				var currentView = leftView.children[0];
				var viewWidth = Math.floor(leftView.size.width);
				
				var section = e.source.linkSection;
				//Ti.API.info('Section->' + section);
				if(!md.app.links[section]){
					section = 'home';
				}
				
			
				
				//Ti.API.info('Section:' + section);
				var sectionView = md.ui.createMainContentView(section, currentView.zIndex++);
				leftView.add(sectionView);
				Ti.API.info(viewWidth);
				var slideTransition = Ti.UI.create2DMatrix().translate(0, -viewWidth);
				var slideTransition2 = Ti.UI.create2DMatrix().translate(viewWidth, 0);
				currentView.animate({ translate:slideTransition, duration:5000 }, function(){
					leftView.remove(currentView);
				});
				sectionView.animate({ translate:slideTransition2, duration:5000 }, function(){
					Ti.API.info('leftviewchildren: ' + leftView.children.length);
				});
				
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
