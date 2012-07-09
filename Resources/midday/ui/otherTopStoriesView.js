
(function(){
	
	md.ui.createOtherTopStoriesView = function(section){
		
		var wrap = Ti.UI.createView({
			top:0,
			left:0,
			width:"45%",
			height:"100%",
			layout:'vertical'
		});
		
		// TitleView
		var titleView = md.ui.components.createTitleView("Other Top Stories");
		
		wrap.add(titleView);
		

		var storiesViewWrap = null;
		var storiesData = [];
		
		wrap.updateView = function(ori){
			
			wrap.width = (ori == 'landscape') ? "60%" : "45%"; 
			if(storiesViewWrap){
				wrap.remove(storiesViewWrap);
				storiesViewWrap = null;
			}
			
			var totalItems = 4;
			// Stories Table 
			storiesViewWrap = Ti.UI.createView({
				top:2,
				left:0,
				height:"90%",
				layout:'horizontal'
			});
			
			var subView1 = Ti.UI.createView({
				height:Ti.UI.FILL,
				layout:'vertical',
				width: (ori == 'portrait') ? Ti.UI.FILL : "50%",
				left:0,
				top:0,
				//backgroundColor:'#0F0'
			});
			storiesViewWrap.add(subView1);
			
			if(ori == 'landscape'){
				storiesViewWrap.layout = 'horizontal';
				var subView2 = Ti.UI.createView({
					height:Ti.UI.FILL,
					layout:'vertical',
					width: "50%",
					top:0,
					left:0,
					//backgroundColor:'#00F'
				});
				storiesViewWrap.add(subView2);
			}
			
			for(var i in storiesData){
				
					var img = storiesData[i].image;
					var title = storiesData[i].title;
					var text = storiesData[i].text;
					var link = storiesData[i].link;
				
					var tablerow = Ti.UI.createView({
						top:5,
						left:5,
						right:5,
						height:(ori == 'portrait') ? "25%" : "40%",
						width:Ti.UI.FILL,
						layout:'horizontal'
					}); 
					
					var rowImage = Ti.UI.createImageView({
						image:"http://174.132.170.219/~ipadmida/" + img,
						top:0,
						left:0,
						width:100,
						height:100		
					});
					
					var rowTitle = Ti.UI.createLabel({
						text: title,
						textAlign:'left',
						left:2,
						font: {'fontSize':13},
						color:'#015291'
					});
					
					var rowDesc = Ti.UI.createLabel({
						text: text,
						textAlign:'left',
						top:3,
						left:2,
						font: {'fontSize':11},
						color:'#111'
									
					});
					
					var contentWrap = Ti.UI.createView({
						layout:'vertical',
						top:0,
						left:10,
						width:(ori == 'portrait') ? 180 : 150
					});
					
					contentWrap.add(rowTitle);
					contentWrap.add(rowDesc);
					
					tablerow.add(rowImage);
					tablerow.add(contentWrap);
			
					var currentSubView = (ori == 'portrait') ? 0 : Math.floor(i / (totalItems / 2));
					
					storiesViewWrap.children[currentSubView].add(tablerow);
			
			}
			
			wrap.add(storiesViewWrap);
			
		}
		
		wrap.loadContent = function(ori, section){
			
			if(!section || !md.app.links[section].otherTopStories) section = 'home';
			
			var url = md.app.links[section].otherTopStories;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				var response = eval('(' + this.responseText + ')');
				
				var totalItems = 4;
				
				storiesData = [];
				for(var i = 0; i < totalItems; i++){
					var article = response.items[i];
					storiesData.push(article);
				}
				
				wrap.updateView(ori);
				
				
			}
			
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
		
		
		return wrap;
		
	};
	
})();
