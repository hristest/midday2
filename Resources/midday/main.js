

var md = {};

(function(){
	
	md.app = {};
	
	md.app.baseUrl = 'http://174.132.170.219/~ipadmida/';
	
	md.app.links = {
		'home': {
			'breakingNews': md.app.baseUrl + 'json/breakingnews.json',
			'topStories': md.app.baseUrl + 'json/top_stories.json',
			'photos': md.app.baseUrl + 'json/photos.json',
			'cartoons': md.app.baseUrl + 'json/cartoons.json',
			'otherTopStories': md.app.baseUrl + 'json/other_top_stories.json',
			'videos': md.app.baseUrl + 'json/videos.json',
			'mate': md.app.baseUrl + 'json/mate.json',
			'columnists': md.app.baseUrl + 'json/columnists.json'
		},
		'news': {
			'topStories': md.app.baseUrl + 'json/news_top_stories.json',
			'otherTopStories': md.app.baseUrl + 'json/news_other_top_stories.json',
		},
		'entertainment': {
			'topStories': md.app.baseUrl + 'json/entertainment_top_stories.json',
			'otherTopStories': md.app.baseUrl + 'json/entertainment_other_top_stories.json',
		},
		'relationships': {
			'topStories': md.app.baseUrl + 'json/relationships_top_stories.json',
			'otherTopStories': md.app.baseUrl + 'json/relationships_other_top_stories.json',
		},
		'lifestyle': {
			'topStories': md.app.baseUrl + 'json/lifestyle_top_stories.json',
			'otherTopStories': md.app.baseUrl + 'json/lifestyle_other_top_stories.json',
		},
		'sports': {
			'topStories': md.app.baseUrl + 'json/sports_top_stories.json',
			'otherTopStories': md.app.baseUrl + 'json/sports_other_top_stories.json',
		},
		'photos': {
			
		},
		'videos': {
			
		},
		'columnists': {
			
		}
	};
	
	md.app.links.mapping = [
			{ name:'photos', title:'Photos' },
			{ name:'videos', title:'Videos'},
			{ name:'news', title:'News'},
			{ name:'entertainment', title:'entertainment'},
			{ name:'sports', title:'Sports'},
			{ name:'relationships', title:'Sex & Relationships'},
			{ name:'lifestyle', title:'lifestyle'},
			{ name:'columnists', title:'columnists'}
		];
	
	
	
	
	
		
})();


Ti.include('/midday/ui/ui.js');
