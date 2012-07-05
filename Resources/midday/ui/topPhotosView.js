

(function(){
	
	md.ui.createTopPhotosView = function(){
		
		var wrap = Ti.UI.createView({
			left:0,
			top:0,
			width:"30%",
			height:Ti.UI.FILL,
			layout:'vertical'
		});
		
		wrapWidth = $$.platformWidth * 0.3;
		
		var photosSectionWrap = Ti.UI.createView({
			top:0,
			layout:'vertical',
			height:"70%"
		});
		// Title
		var titlearea = Ti.UI.createView({
			layout:'horizontal',
			top:0,
			height:20,
		});
		
		var tsTitle = Ti.UI.createLabel({
			text:'Top Photos',
			color:'#ff7500',
			font:{fontSize:12},
			width:"35%",
			left:"5%",
			top:0,
		});
		
		var seperatorL = Ti.UI.createView({
			height:4,
			width:"30%",
			backgroundImage:"/images/seperator.png",
			top:5,
		});
		
		var seperatorR = Ti.UI.createView({
			height:4,
			width:"20%",
			backgroundImage:"/images/seperator.png",
			left:"5%",
			right:0,
			top:5,
		});
		
		titlearea.add(seperatorL);
		titlearea.add(tsTitle);
		titlearea.add(seperatorR);
		
		photosSectionWrap.add(titlearea);
		wrap.add(photosSectionWrap);
		
		
		function addTopPhotos(ori){
			// Photos
			
			if(photosSectionWrap.children.length == 2)
				photosSectionWrap.remove(photosSectionWrap.children[1]);
			
			var url = md.app.links.photos;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				
				var response = eval('(' + this.responseText + ')');
				
				var photosWrap = Ti.UI.createView({
					layout:'vertical',
					top:3,
					left:0,
					width:"100%"
				});

				photosSectionWrap.add(photosWrap);
				
				var numLayers = (ori == 'portrait') ? 3 : 2;
				
				var topLayerHeight = (ori == 'portrait') ? "58%" : "60%";
				var otherLayersHeight = (ori == 'portrait') ? "20%" : "30%";
				
				for(var i = 0; i < numLayers; i++){
					var imageLayer = Ti.UI.createView({
						top:(i == 0) ? 0 : 5,
						layout:'horizontal',
						height:(i == 0) ? topLayerHeight : otherLayersHeight,
						width:"100%",
						left:(i == 0) ? 0 : 0, // Testing
						right:(i == 0) ? 5 : 0
					});
					
					photosWrap.add(imageLayer);
				} 
				
				var imgList = [];
				for(var i in response.results.result){
					var item = response.results.result[i];
					var img = item.img;
					var title = item.title;
					var fullurl = item.fullurl;
					
					//var firstImageWidth = (ori == 'portrait') ? "100%" : 
					
					var imgView = Ti.UI.createImageView({
						image:img,
						width:(i == 0) ? "100%" : "30%",
						height:"100%", 
						left:(i == 0) ? 0 : 5,
						top:0			
					});
					
					imgList.push(imgView);
					
				}

				photosWrap.children[0].add(imgList.shift());
				numLayers--;

				
				var numItems = 3;
				for(var i = 0; i < numItems * numLayers; i++){
					var currentLayer = Math.floor(i / numItems) + 1;
					Ti.API.info('currentlayer:' + currentLayer);
					photosWrap.children[currentLayer].add(imgList[i]);
					
				}
				
				
			};
			
			tsLoader.open('GET', url);
			tsLoader.send();
			
		}
		
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = getOrientation(Ti.Gesture.orientation);
			
			if(ori == 'landscape'){
				photosSectionWrap.height = Ti.UI.FILL;
				addTopPhotos(ori);
				
			} else if(ori == 'portrait'){
				photosSectionWrap.height = "70%"
				addTopPhotos(ori);
			}
			
			
		});
		
		
		// Cartoons
		var cartoonsWrap = md.ui.createCartoonsView();
		
		Ti.Gesture.addEventListener('orientationchange', function(e){
			var ori = getOrientation(Ti.Gesture.orientation);
			
			if(ori == 'portrait'){
				wrap.add(cartoonsWrap);
			} else if(ori == 'landscape'){
				wrap.remove(cartoonsWrap);
			}
			
		});
		
		
		
		
		return wrap;
		
	}
	
})();
