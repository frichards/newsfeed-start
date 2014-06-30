$(document).ready(function() {
	$.ajax('https://api.parse.com/1/classes/NewsItem', 
	  {
	    beforeSend: function(request) {
	      request.setRequestHeader('X-Parse-Application-Id', 'pQmmsvcrxbGsFV8hiDKinNSiy7rsdgXzOnfBeY0H');
	      request.setRequestHeader('X-Parse-REST-API-Key', 'iRPDksrwdQ6lOt33lr7o4LdxZnfgfTusHB9Dwjfp');
	        }
	    }
		).done(function(response) {

			var newsFeed = $(".newsfeed");

			$.each(response.results, function(i, obj){

				var titleContainer = "<h1>" + obj.title + "</h1>";
				var bodyContainer = "<p>" +obj.body + "</p>";

				newsFeed.append(titleContainer, bodyContainer);
			});
		
	});
});