

(function(){
	
	md.ui.createPhotosView = function(section){
		
		var wrap = md.ui.components.createWrapView({ layout:'vertical', height:"70%"});
		
		// Title
		var titleView = md.ui.components.createTitleView("Photos");
		
		wrap.add(titleView);
		
		var data = [];
		
		// UpdateView
		wrap.updateView = function(ori){
			
			wrap.height = (ori == 'landscape') ? Ti.UI.FILL : "70%";
			
			if(wrap.children.length == 2)
				wrap.remove(wrap.children[1]);
		
			var photosWrap = Ti.UI.createView({
					layout:'vertical',
					top:3,
					left:0,
					width:"100%"
				});

				wrap.add(photosWrap);
				
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
				for(var i in data){
					var item = data[i];
					var img = item.img;
					var title = item.title;
					var fullurl = item.fullurl;
					
					
					
					var imgView = Ti.UI.createImageView({
						image:img,
						width:(i == 0) ? "100%" : "30%",
						height:"100%", 
						left:(i == 0) ? 0 : 5,
						top:0			
					});
					
					imgList.push(imgView);
					
				}
				
				photosWrap.children[0].add(imgList[0]);
				numLayers--;

				
				var numItems = 3;
				
				for(var i = 0; i < numItems * numLayers; i++){
					var currentLayer = Math.floor(i / numItems) + 1;

					try{
					photosWrap.children[currentLayer].add(imgList[i + 1]);
					} catch(e){
						Ti.API.info(e);
					}
					
				}
				
				
		}
		
		
		// LoadContent
		wrap.loadContent = function(ori, section){
			
			if(!section) section = 'home';
			
			var url = md.app.links[section].photos;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				
				var response = eval('(' + this.responseText + ')');
				
				for(var i in response.results.result){
					var photoItem = response.results.result[i];
					data.push(photoItem);
				}
				
				wrap.updateView(ori);

			};
			
			tsLoader.open('GET', url);
			tsLoader.send();
			
		}
		
		var ori = md.getOri();
		wrap.loadContent(ori, section);
		var OldOrientation = -1;
		// Orientation Change
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
