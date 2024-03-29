
(function(){
	
	md.ui.createBreakingNewsView = function(section){
		
		var bnView = Ti.UI.createView({
			backgroundColor:'#FFF',
			height:"5%",
			top:15,
			left:10,
			right:10,
			width:'auto'
		});
		
		// BreakingNews image
		var bnImage = Ti.UI.createImageView({
			image:"/images/breakingNews.png",
			left:0,
			top:0,
			width:123,
			height:27
		});
		
		// adding Components
		bnView.add(bnImage);
		
		// Logo image
		var bnLogo = Ti.UI.createImageView({
			image:"/images/logo.png",
			width:118,
			height:33,
			top:0,
			right:0
		});
		
		var newsArticles = [];
		
		var newsWrapper = Ti.UI.createView({
				left: bnImage.width + 5,
				top:0,
				height:30
			});

		var newsListView = Ti.UI.createView({
			layout:'vertical',
			top:0,
			left:0
		});
		
		bnView.updateView = function(newsItems){
			
			for(var i in newsItems){
				var newsLabel = Ti.UI.createLabel({
					left:"2%",
					width:'auto',
					color:"#111",
					font: {'fontSize':$$.platformWidth * 0.02},
					wordWrap:false,
					height:30
				});
				
				newsLabel.text = newsArticles[i].title;
				newsListView.add(newsLabel);
			}
		}
		
		bnView.loadContent = function(section){
			
			if(!section || !md.app.links[section].breakingNews) section = 'home';
			
			// Retrieving News Articles
			var url = md.app.links[section].breakingNews;
			var newsLoader = Ti.Network.createHTTPClient();
			newsLoader.onload = function(e){
				var newslist = eval('(' + this.responseText + ')');
				
				for(var i in newslist.item){
					var article = {};
					article.title = newslist.item[i].title;
					newsArticles.push(article);
				}
				
				// Creating SubViews for each newsItem and adding to breakingnews container view
				
				
				newsWrapper.add(newsListView);
				
				
				bnView.updateView(newsArticles);
				
				var newsCount = newsArticles.length;
				
				// News Sticker Animation
				var duration = 3000;
				setInterval(function(){
					var newsItemHeight = 30;
					var animSpeed = 100;
					
					
					var topPosition = newsListView.top - newsItemHeight;
					if(topPosition <= -(newsItemHeight * newsCount - 1)) topPosition = 0;
		
					var bnAnim = Ti.UI.createAnimation({ 'top': topPosition });
					bnAnim.duration = animSpeed;
					bnAnim.addEventListener('complete', function(){ newsListView.top = topPosition; });
					//Ti.API.info('TOP: ' + (topPosition));
					newsListView.animate(bnAnim);
					
					
				}, duration);
				//-------------------------------------
				
				bnView.add(newsWrapper);
				bnView.add(bnLogo);
				//-------------------------
			
				
			};
			
			newsLoader.open('GET', url);
			newsLoader.send();
			//-------------------------
		
		}
		
		bnView.loadContent(section);
		
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = md.getOrientation(Ti.Gesture.orientation);
			
			if(ori == 'landscape'){
				bnView.height = "5%"
				
			} else if(ori == 'portrait'){
				bnView.height = "4%"
			}
			
			
		});
		
		


		return bnView;
	}
	
})();
