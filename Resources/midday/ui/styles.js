
(function(){
	
	md.ui.theme = {
		textColor:'#000000',
		headerColor:'#035392',
		titleColor:'#ff7500',
		bgColor:'#FFFFFF',
		fontFamily:'Verdana',
		margin:5
	};
	
	md.ui.properties = {
		platformWidth: Ti.Platform.displayCaps.platformWidth,
		platformHeight: Ti.Platform.displayCaps.platformHeight,
		
		contentText: {
			color: md.ui.theme.textColor,
			font: {
				fontFamily: md.ui.theme.fontFamily,
				fontSize: 11
			},
			top:0,
			left:0
		},
		
		headerText: {
			color: md.ui.theme.headerColor,
			font: {
				fontFamily: md.ui.theme.fontFamily,
				fontSize: 13
			},
			top:0,
			left:0
		},
		
		titleText: {
			color: md.ui.theme.titleColor,
			font: {
				fontFamily: md.ui.theme.fontFamily,
				fontSize: 12
			},
			width:Ti.UI.SIZE,
			textAlign:'center',
			backgroundColor: md.ui.theme.bgColor
		},
		
		seperator: {
			height: 4,
			width:Ti.UI.FILL,
			top: 5,
			left: 5,
			right: 5,
			backgroundImage:"/images/seperator.png"
		},
		
		stretch: {
			top:0,bottom:0,left:0,right:0
		},
		
		wrapView: {
			top:0, bottom:md.ui.theme.margin , left:md.ui.theme.margin, right:md.ui.theme.margin
		},
		
		titleView: {
			height: 20
		},
		
		debug:{
			backgroundColor:'#F00'
		}
	};
	
})();

var $$ = md.ui.properties;
