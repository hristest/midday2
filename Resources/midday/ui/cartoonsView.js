

(function(){
	
		md.ui.createCartoonsView = function(section){
			
			var wrap = md.ui.components.createWrapView({ layout:'vertical' });
			
			// Title
			var titleView = md.ui.components.createTitleView("cartoons");
			wrap.add(titleView);
			

			// Cartoon Image
			var contentWrap = Ti.UI.createView($$.stretch);
			wrap.add(contentWrap);
			
			var data;
			
			// Update View
			wrap.updateView = function(){
				
				if(contentWrap.children.length == 1) contentWrap.remove(contentWrap.children[0]);
				var innerWrap = Ti.UI.createView($$.stretch);
				
				var coverImage = data.sections['@attributes'].coverImage;
				
				var cartoonImage = Ti.UI.createImageView({
					image:coverImage,
					width:Ti.UI.FILL
				});
				
				innerWrap.add(cartoonImage);
				contentWrap.add(innerWrap);
				
			};
			
			// Load Content
			wrap.loadContent = function(section){
				
				if(!section) section = 'home';
				
				var url = md.app.links[section].cartoons;
				var tsLoader = Ti.Network.createHTTPClient();
				tsLoader.onload = function(e){
					var response = eval('(' + this.responseText + ')');
					data = response;
					
					wrap.updateView();
				};
				
				tsLoader.open('GET', url);
				tsLoader.send();
			}
			
			wrap.loadContent(section);
			
			
			
			return wrap;
			
		};
		
		
	
	
})();
