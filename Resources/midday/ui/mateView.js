

(function(){
	
	
	md.ui.createMateView = function(){
		
		var mateView = Ti.UI.createView({
			top:0,
			left:5,
			right:5,
			height:Titanium.UI.FILL,
			layout:'vertical'
		});


		// Title
		var titlearea = Ti.UI.createView({
			layout:'horizontal',
			top:0,
			height:20
		});
		
		var tsTitle = Ti.UI.createLabel({
			text:'Mate',
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
		
		mateView.add(titlearea);
		
		
		// --------------------------------------
		
		// Mate Images
		var mateImagesView = Ti.UI.createView({
			top:0,
			left:0,
			layout:'vertical',
			height:Ti.UI.FILL
		});		
		
		var url = md.app.links.mate;
		var tsLoader = Ti.Network.createHTTPClient();
		tsLoader.onload = function(e){
			var response = eval('(' + this.responseText + ')');
			
			var coverImage = response.sections['@attributes'].coverImage;
			
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
				var img = response.sections.flipbook.flip[i].img['@attributes'].src;
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
			
			mateView.add(mateImagesView);
			
		}
		
		tsLoader.open('GET', url);
		tsLoader.send();


		
		return mateView;
		
		
	};
	
})();
