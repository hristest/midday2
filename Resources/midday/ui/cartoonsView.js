

(function(){
	
		md.ui.createCartoonsView = function(){
			var cartoonsWrap = Ti.UI.createView({
				top:5,
				layout:'vertical',
				height:Ti.UI.FILL,
				width:Ti.UI.FILL
			});
			// Title
			var titlearea = Ti.UI.createView({
				layout:'horizontal',
				top:0,
				height:20
			});
			
			var tsTitle = Ti.UI.createLabel({
				text:'Cartoons',
				textAlign:'center',
				color:'#ff7500',
				font:{fontSize:12},
				width:"30%",
				left:3,
				top:0
			});
			
			var seperatorL = Ti.UI.createView({
				height:4,
				width:"30%",
				backgroundImage:"/images/seperator.png",
				top:5
			});
			
			var seperatorR = Ti.UI.createView({
				height:4,
				width:"30%",
				backgroundImage:"/images/seperator.png",
				left:3,
				right:0,
				top:5
			});
			
			titlearea.add(seperatorL);
			titlearea.add(tsTitle);
			titlearea.add(seperatorR);
			
			
			cartoonsWrap.add(titlearea);
			
			
			
			
			
			// Cartoon Image
			var url = md.app.links.cartoons;
			var tsLoader = Ti.Network.createHTTPClient();
			tsLoader.onload = function(e){
				
				var response = eval('(' + this.responseText + ')');
				
				var coverImage = response.sections['@attributes'].coverImage;
				
				var cartoonImage = Ti.UI.createImageView({
					image:coverImage,
					width:Ti.UI.FILL
				});
				
				cartoonsWrap.add(cartoonImage);
			};
			
			tsLoader.open('GET', url);
			tsLoader.send();
			
			return cartoonsWrap;
			
		};
		
		
	
	
})();
