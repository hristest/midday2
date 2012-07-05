

(function(){
	
	md.ui.createTopVideosView = function(){
		
		var videosSectionWrap = Ti.UI.createView({
			top:0,
			left:5,
			right:5,
			height:"60%",
			layout:'vertical'
		});
		
		// Title
		var titlearea = Ti.UI.createView({
			layout:'horizontal',
			top:0,
			height:20
		});
		
		var tsTitle = Ti.UI.createLabel({
			text:'Videos',
			textAlign:'center',
			color:'#ff7500',
			font:{fontSize:12},
			width:"35%",
			left:3,
			top:0
		});
		
		var seperatorL = Ti.UI.createView({
			height:4,
			width:"25%",
			backgroundImage:"/images/seperator.png",
			top:5
		});
		
		var seperatorR = Ti.UI.createView({
			height:4,
			width:"20%",
			backgroundImage:"/images/seperator.png",
			left:3,
			right:0,
			top:5
		});
		
		titlearea.add(seperatorL);
		titlearea.add(tsTitle);
		titlearea.add(seperatorR);
		
		videosSectionWrap.add(titlearea);
		
		
		// Videos
		
		var videosWrap = Ti.UI.createView({
			top:0,
			left:0,
			layout:'vertical',
			height:Ti.UI.FILL
		});
		
		var url = md.app.links.videos;
		var tsLoader = Ti.Network.createHTTPClient();
		tsLoader.onload = function(e){
			var response = eval('(' + this.responseText + ')');
			
			for(var i = 0; i < 2; i++){
				var img = response.item[i].image;
				var title = response.item[i].title;
				var videoView = Ti.UI.createView({
					top:-10,
					left:0,
					layout:'vertical',
					height:"50%"
				})
				
				var videoImage = Ti.UI.createImageView({
					image:img,
					top:0,
					left:0,
					width:Ti.UI.FILL
				});
				
				var videoTitle = Ti.UI.createLabel({
					text:title,
					font: {'fontSize':13},
					color:'#015291',
					top:-10,
					left:0
				});
				
				videoView.add(videoImage);
				videoView.add(videoTitle);
				
				videosWrap.add(videoView);
			}
		}
		
		tsLoader.open('GET', url);
		tsLoader.send();
		
		videosSectionWrap.add(videosWrap);
		
		
		
		
		return videosSectionWrap;
		
	};
	
})();
