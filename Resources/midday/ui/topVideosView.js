

(function(){
	
	md.ui.createTopVideosView = function(){
		
		var wrap = md.ui.components.createWrapView({ layout:'vertical', height:"60%" });
		
		// Title
		var titleView = md.ui.components.createTitleView("videos");
		wrap.add(titleView);
		
		var videosWrap = Ti.UI.createView($$.stretch);
		
		var data = [];
		
		wrap.updateView = function(ori){
			
			if(videosWrap.children.length == 1){
				videosWrap.remove(videosWrap.children[0]);
			}
			
			var innerWrap = Ti.UI.createView({
				top:0,
				left:0,
				layout:'vertical',
				height:Ti.UI.FILL
			});
			
			for(var i = 0; i < 2; i++){
				var img = data[i].image;
				var title = data[i].title;
				var videourl = data[i].mp4video_url;
	
				var videoView = Ti.UI.createView({
					top:-10,
					left:0,
					layout:'vertical',
					height:"50%"
				});
				
				var videoWrap = Ti.UI.createView({
					top:0,
					left:0,
					height:'70%'
				});
				
				var videoImage = Ti.UI.createImageView({
					image:img,
					top:0,
					left:0,
					width:Ti.UI.FILL
				});
				
				videoImage.addEventListener('singletap', function(e){
					var videoplayer = Ti.Media.createVideoPlayer({
						url:videourl,
						backgroundImage:img,
						top:0,
						left:0,
						width:Ti.UI.FILL,
						autoplay:false,
						height:Ti.UI.FILL,
						mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
						scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
					});
					videoWrap.add(videoplayer);
				});
				
				
	
				
				videoWrap.add(videoImage);
				
								
				var videoTitle = Ti.UI.createLabel({
					text:title,
					font: {'fontSize':13},
					color:'#015291',
					top:0,
					left:0
				});
				
				videoView.add(videoWrap);
				videoView.add(videoTitle);
				
				innerWrap.add(videoView);
			
			
			
			}
		
			videosWrap.add(innerWrap);
			wrap.add(videosWrap);
			
		};
		
		
		wrap.loadContent = function(ori, section){
			
			if(!section) section = 'home';
			
			var url = md.app.links[section].videos;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				var response = eval('(' + this.responseText + ')');
				
				for(var i = 0; i < 2; i++){
					var videoItem = response.item[i];
					data.push(videoItem);
				}
				
				wrap.updateView(ori);

			}
			
			tsLoader.open('GET', url);
			tsLoader.send();
			
			
		}
		
		var ori = md.getOri();
		wrap.loadContent(ori);
		
		
		return wrap;
		
	};
	
})();
