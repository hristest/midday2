
(function(){
	
	md.ui.createOtherTopStoriesView = function(){
		
		var wrap = Ti.UI.createView({
			top:0,
			left:0,
			width:"45%",
			height:"100%",
			layout:'vertical'
		});
		
		// Title
		wrapWidth = $$.platformWidth * 0.3;
		var titlearea = Ti.UI.createView({
			layout:'horizontal',
			top:0,
			height:20
		});
		
		var tsTitle = Ti.UI.createLabel({
			text:'Other Top Stories',
			textAlign:'center',
			color:'#ff7500',
			font:{fontSize:12},
			width:"40%",
			left:10,
			top:0
		});
		
		var seperatorL = Ti.UI.createView({
			height:4,
			width:"20%",
			backgroundImage:"/images/seperator.png",
			top:5
		});
		
		var seperatorR = Ti.UI.createView({
			height:4,
			width:"20%",
			backgroundImage:"/images/seperator.png",
			left:10,
			right:0,
			top:5
		});
		
		titlearea.add(seperatorL);
		titlearea.add(tsTitle);
		titlearea.add(seperatorR);
		
		wrap.add(titlearea);
		
		
		
		
		var storiesViewWrap = null;
		
		function reload(ori){
			
			
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
			
			
			var url = md.app.links.otherTopStories;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				var response = eval('(' + this.responseText + ')');
				
				var totalItems = 4;
				
				var tablerows = [];
				for(var i = 0; i < totalItems; i++){
					var img = response.items[i].image;
					var title = response.items[i].title;
					var text = response.items[i].text;
					var link = response.items[i].link;
					
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
					Ti.API.info("CurrentSubView: " + currentSubView);
					storiesViewWrap.children[currentSubView].add(tablerow);
				}
				
				
			}
			
			tsLoader.open('GET', url);
			tsLoader.send();
			
			wrap.add(storiesViewWrap);
		
		}
		

		
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = getOrientation(Ti.Gesture.orientation);
			
			if(ori == 'landscape'){
				wrap.width = "60%";
				if(storiesViewWrap != null)
					wrap.remove(storiesViewWrap);
				reload(ori);
				
			} else if(ori == 'portrait'){
				wrap.width = "45%";
				if(storiesViewWrap != null)
					wrap.remove(storiesViewWrap);
				reload(ori);
			}
			
			
		});
		
		
		return wrap;
		
	};
	
})();
