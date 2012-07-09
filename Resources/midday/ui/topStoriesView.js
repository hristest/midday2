

(function(){
	
	md.ui.createTopStoriesView = function(section){
		
		var tsView = Ti.UI.createView({
			height:"30%",
			top:0,
			left:10,
			right:10,
			layout:"vertical"
		});
		
		// Title area
		//-------------------------------------------
		var titlearea = Ti.UI.createView({
			layout:'horizontal',
			top:0,
			height:40
		});
		
		var tsTitle = Ti.UI.createLabel({
			text:'Top Stories',
			color:'#ff7500',
			font:{fontSize:12},
			width:"20%",
			textAlign:'center'
		});
		
		var seperatorL = Ti.UI.createView({
			height:4,
			width:"40%",
			backgroundImage:"/images/seperator.png"
		});
		
		var seperatorR = Ti.UI.createView({
			height:4,
			width:"25%",
			backgroundImage:"/images/seperator.png"
		});
		
		var ssIndicator = Ti.UI.createView({
			height:25,
			layout:"horizontal",
			width:"10%",
			left:30
		});
		
		var pages = 3;
		var currentPage = 1;
		for(var i = 0; i < pages; i++){
			var pageInd = Ti.UI.createView({
				width:8,
				height:8,
				borderRadius:4,
				left:8,
				top:5,
				backgroundColor: (i == currentPage - 1) ? "#ff7200" : "#7f7f7f"
			});
			
			ssIndicator.add(pageInd);
		}

		titlearea.add(seperatorL);
		titlearea.add(tsTitle);
		titlearea.add(seperatorR);
		titlearea.add(ssIndicator);
		
		tsView.add(titlearea);
		//------------------------------------------------
		

		// SlideShow
		
		var sldShowWrap = Ti.UI.createView({
			top:0,
			left:0,
			height:"80%",
			width:Ti.UI.Fill
		});
		
		var sldShow = Ti.UI.createScrollableView({
			layout:'horizontal',
			top:0,
			left:0,
			height:Ti.UI.FILL
		});
		
		
		
		sldShow.addEventListener('scroll', function(e){	
			for(var ind in ssIndicator.children){
				ssIndicator.children[ind].backgroundColor = (ind == this.currentPage) ? "#ff7200" : "#7f7f7f";
			}
		});
		
		sldShowWrap.add(sldShow);
		tsView.add(sldShowWrap);
		
		
		var topStories;
		
		tsView.updateView = function(ori){
			
	
				var itemsPerPage = (ori == "portrait") ? 3 : 4;

				var numStories = topStories.length;
				//var pages = numStories / itemsPerPage;
				//if((numStories % itemsPerPage) != 0) pages++;
				//pages = Math.floor(pages);
				pages = 3;
				var pagesView = [];
				for(var p = 0; p < pages; p++){
					var pageView = Ti.UI.createView({
						layout:'horizontal',
						top:0,
						left:0,
						height:"98%",
						width:"98%"
					});
					
					pagesView.push(pageView);
				}
		
				
				var totalItems = topStories.length;
				
				var sldshowItems = ((pages * itemsPerPage) < totalItems) ? pages * itemsPerPage : totalItems;
				
				
				var currentPage = 0;
				for(var s = 0; s < sldshowItems; s++){
					
					var title = topStories[s].title,
						img = topStories[s].image,
						desc = topStories[s].text,
						link = topStories[s].link;
			
					currentPage = Math.floor(s / itemsPerPage);
					
					var scrollItem = Ti.UI.createView({
						left: (pagesView[currentPage].children.length == 0) ? 1 : 30,
						top:0,
						height:"100%",
						layout:'vertical',
						width:(itemsPerPage == 3) ? "30%" : "22%"
					});
					
					var imgView = Ti.UI.createImageView({
						image:"http://174.132.170.219/~ipadmida/" + img,
						height:160,
						top:2
					});
					
					var titleLabel = Ti.UI.createLabel({
						text:title,
						font:{fontSize:13},
						color:'#015291',
						top:2,
						left:0
					});
					
					var descLabel = Ti.UI.createLabel({
						text:desc,
						color:'#111',
						font:{fontSize:11},
						top:2,
						left:0
					});
					
					scrollItem.add(imgView);
					scrollItem.add(titleLabel);
					scrollItem.add(descLabel);
					
					
					// Details View Load
					
					
					
					
					
					// ----------------------------------
					
					
					
					pagesView[currentPage].add(scrollItem);
					
					
				}
				
				sldShow.views = pagesView;

				
		}
		
		
		tsView.loadContent = function(ori, section){
			
			if(!section || !md.app.links[section].topStories) section = 'home';
			
			var url = md.app.links[section].topStories;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				
				var response = eval('(' + this.responseText + ')');
				topStories = [];
				for(var i in response.items){
					topStories.push(response.items[i]);
				}
				
				tsView.updateView(ori);
				
				
			};
			
			tsLoader.open('GET', url);
			tsLoader.send();

		}

		
		var ori = md.getOri();
		tsView.loadContent(ori, section);
		
		// Orientation Change
		var OldOrientation = -1;
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = md.getOrientation(Ti.Gesture.orientation);
			
			if(e.orientation < 1 || e.orientation > 4) return;
			
			if(OldOrientation==e.orientation) return;
 
    		// Set Old to new
    		OldOrientation=e.orientation;
			
			if(ori == 'landscape'){
				tsView.height = "40%";
				tsView.loadContent(ori, section);
				
			} else if(ori == 'portrait'){
				tsView.height = "30%";
				tsView.loadContent(ori, section);
			}
			
			
		});
		
		return tsView;
	};
	
})();
