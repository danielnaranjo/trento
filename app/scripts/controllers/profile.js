'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the trentoApp
 */
app.controller('ProfileCtrl', function ($scope, $http, Auth) {

	$scope.auth=Auth.data.twitter;

//{"provider":"twitter","uid":"twitter:110495478","twitter":{"id":"110495478","accessToken":"110495478-qnrKkkokaooS4xZhfjwI3m2xL9Mj5gF6xKFW5Lsh","accessTokenSecret":"IRyN7oP4lPMQzv7Glhqc5J1dDM6p578gyJ3XBjalX17fG","displayName":"Daniel Naranjo","username":"NaranjoDaniel","cachedUserProfile":{"id":110495478,"id_str":"110495478","name":"Daniel Naranjo","screen_name":"NaranjoDaniel","location":"","profile_location":null,"description":"Running @findbyco (link: https://t.co/MMRCHvsm85), #techpreneur, #webdev in @loultimoenlaweb, husband, workaholic, traveller #startup #entrepreneur #programming","url":"https://t.co/JpQRsaZGKx","entities":{"url":{"urls":[{"url":"https://t.co/JpQRsaZGKx","expanded_url":"http://www.danielnaranjo.info","display_url":"danielnaranjo.info","indices":[0,23]}]},"description":{"urls":[{"url":"https://t.co/MMRCHvsm85","expanded_url":"http://j.mp/getFindBy","display_url":"j.mp/getFindBy","indices":[25,48]}]}},"protected":false,"followers_count":487,"friends_count":351,"listed_count":46,"created_at":"Mon Feb 01 19:10:59 +0000 2010","favourites_count":1550,"utc_offset":-16200,"time_zone":"Caracas","geo_enabled":false,"verified":false,"statuses_count":10509,"lang":"es","status":{"created_at":"Fri Dec 04 16:07:30 +0000 2015","id":672809460964921300,"id_str":"672809460964921344","text":"Si cierra su API es porque No te quiere ;) #humorinformatico","source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":0,"entities":{"hashtags":[{"text":"humorinformatico","indices":[43,60]}],"symbols":[],"user_mentions":[],"urls":[]},"favorited":false,"retweeted":false,"lang":"es"},"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"131516","profile_background_image_url":"http://abs.twimg.com/images/themes/theme14/bg.gif","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme14/bg.gif","profile_background_tile":true,"profile_image_url":"http://pbs.twimg.com/profile_images/477427636453781505/tZOu_EIT_normal.jpeg","profile_image_url_https":"https://pbs.twimg.com/profile_images/477427636453781505/tZOu_EIT_normal.jpeg","profile_banner_url":"https://pbs.twimg.com/profile_banners/110495478/1427474624","profile_link_color":"009999","profile_sidebar_border_color":"EEEEEE","profile_sidebar_fill_color":"EFEFEF","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"suspended":false,"needs_phone_verification":false},"profileImageURL":"https://pbs.twimg.com/profile_images/477427636453781505/tZOu_EIT_normal.jpeg"},"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6InR3aXR0ZXI6MTEwNDk1NDc4IiwicHJvdmlkZXIiOiJ0d2l0dGVyIn0sImlhdCI6MTQ0OTM2ODYzM30.wswwyGkK_dsCuK9WeLxYhQkC4K0cTuvbGRdPZ-3aT7o","auth":{"uid":"twitter:110495478","provider":"twitter"},"expires":1449455033}

	$scope.URL='https://guarded-journey-1782.herokuapp.com/tweetbyuser?u='+$scope.auth.username+'&t='+$scope.auth.accessToken+'&s='+$scope.auth.accessTokenSecret || 'scripts/real-sample.json';
	$scope.getMore = function() {
		$http({
			method: 'GET',
			url: $scope.URL
		})
		.success(function(data){
			$scope.tweets=data;
			$('footer').addClass('animated bounceOutDown');
		})
		.error(function(){
			toastr.error('Cant access to API server');
			console.log('Error API');
		});
	};
  });
