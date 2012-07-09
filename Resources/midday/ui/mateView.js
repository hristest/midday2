

(function(){
	
	
	md.ui.createMateView = function(){
		
		var wrap = md.ui.components.createWrapView({ layout:'vertical' });

		// Title
		var titleView = md.ui.components.createTitleView("mate");
		wrap.add(titleView);
		
		
		// --------------------------------------
		
		// Mate Images
		var mateImagesView = Ti.UI.createView({
			top:0,
			left:0,
			layout:'vertical',
			height:Ti.UI.FILL
		});
		
		var data;
		
		wrap.updateView = function(){
			
			var coverImage = data.sections['@attributes'].coverImage;
			var coverImageView = Ti.UI.createImageView({
				image: coverImage,
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:"60%"
			});
			
			mateImagesView.add(coverImageView);
			
			var mateimgWrap = Ti.UI.createView({
				layout:'horizontal',
				top:10,
				left:0,
				height:'40%'
			});
			
			for(var i = 0; i < 2; i++){
				var img = data.sections.flipbook.flip[i].img['@attributes'].src;
				var mateimg = Ti.UI.createImageView({
					image: img,
					top:0,
					left:10,
					width:"40%",
					height:"100%"
				});
				
				mateimgWrap.add(mateimg);
			}
			
			mateImagesView.add(mateimgWrap);
			
			wrap.add(mateImagesView);
			
		};
		
		
		wrap.loadContent = function(section){
			
			if(!section) section = 'home';
			
			var url = md.app.links[section].mate;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				var response = eval('(' + this.responseText + ')');
				
				data = response;
				
				wrap.updateView();
				
			}
			
			tsLoader.open('GET', url);
			tsLoader.send();
			
		}
		
		wrap.loadContent();


		
		return wrap;
		
		
	};
	
})();
