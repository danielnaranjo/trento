'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trentoApp
 */
app.controller('LoginCtrl', function ($scope, $location, $http, toastr, User) {

    $scope.login = function() {
      var ref = new Firebase("https://trento.firebaseio.com");
      ref.authWithOAuthPopup("twitter", function(error, authData) {
        if (error) {
          toastr.error('Login Failed!');
          // console.log("Login Failed!", error);
        } else {
          User.data = authData.twitter;
          // Added to Firebas as User registered
          var refe = new Firebase("https://trento.firebaseio.com/users");
          var usersRef = refe.child("registered");
          usersRef.push({
            id : authData.twitter.id,
            name : authData.twitter.displayName,
            username : authData.twitter.username
          });
          // Display a nice Toastr
          toastr.success('You have successfully signed in');
          $scope.hireMe="mailto:daniel@loultimoenlaweb.com?subject=Trento is OK&body=Nice one!";
          $location.path('/main');
          //console.log("Authenticated successfully with payload:", authData);
        }
      });
    };

  });

/*
{
"id":"110495478",
"accessToken":"110495478-qnrKkkokaooS4xZhfjwI3m2xL9Mj5gF6xKFW5Lsh",
"accessTokenSecret":"IRyN7oP4lPMQzv7Glhqc5J1dDM6p578gyJ3XBjalX17fG",
"displayName":"Daniel Naranjo",
"username":"NaranjoDaniel",
"cachedUserProfile":{
"id":110495478,
"id_str":"110495478",
"name":"Daniel Naranjo",
"screen_name":"NaranjoDaniel",
"location":"",
"profile_location":null,
"description":"Running @findbyco (link: https://t.co/MMRCHvsm85), #techpreneur, #webdev in @loultimoenlaweb, husband, workaholic, traveller #startup #entrepreneur #programming",
"url":"https://t.co/JpQRsaZGKx",
"entities":{"url":{
"urls":[{"url":"https://t.co/JpQRsaZGKx",
  "expanded_url":"http://www.danielnaranjo.info",
  "display_url":"danielnaranjo.info",
  "indices":[0,23]}
  ]},
"description":{"urls":[{
  "url":"https://t.co/MMRCHvsm85",
  "expanded_url":"http://j.mp/getFindBy",
  "display_url":"j.mp/getFindBy",
  "indices":[25,48]}
]}},
"protected":false,
"followers_count":485,
"friends_count":350,
"listed_count":46,
"created_at":"Mon Feb 01 19:10:59 +0000 2010",
"favourites_count":1550,
"utc_offset":-16200,
"time_zone":"Caracas",
"geo_enabled":false,
"verified":false,
"statuses_count":10510,
"lang":"es",
"status":{
  "created_at":"Fri Dec 04 18:56:29 +0000 2015",
  "id":672851985582944300,
  "id_str":"672851985582944257",
  "text":"Hola @MercantilBanco, hace 2 días realice una transferencia a otro banco y
   aún no ha sido recibida, la misma fue debitada. Algun problema?",
  "source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>","truncated":false,
  "in_reply_to_status_id":null,
  "in_reply_to_status_id_str":null,"in_reply_to_user_id":null,
  "in_reply_to_user_id_str":null,
  "in_reply_to_screen_name":null,
  "geo":null,"coordinates":null,
  "place":null,
  "contributors":null,
  "retweet_count":0,
  "favorite_count":0,
  "entities":{
  "hashtags":[],
  "symbols":[],
  "user_mentions":[
    {"screen_name":"MercantilBanco",
    "name":"Mercantil Banco",
    "id":67401711,
    "id_str":"67401711","indices":[5,20]
  }],
  "urls":[]},
  "favorited":false,
  "retweeted":false
  ,"lang":"es"},
  "contributors_enabled":false,
  "is_translator":false,
  "is_translation_enabled":false,
  "profile_background_color":"131516",
  "profile_background_image_url":"http://abs.twimg.com/images/themes/theme14/bg.gif",
  "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme14/bg.gif",
  "profile_background_tile":true,
  "profile_image_url":"http://pbs.twimg.com/profile_images/477427636453781505/tZOu_EIT_normal.jpeg",
  "profile_image_url_https":"https://pbs.twimg.com/profile_images/477427636453781505/tZOu_EIT_normal.jpeg",
  "profile_banner_url":"https://pbs.twimg.com/profile_banners/110495478/1427474624",
  "profile_link_color":"009999",
  "profile_sidebar_border_color":"EEEEEE","profile_sidebar_fill_color":"EFEFEF",
  "profile_text_color":"333333",
  "profile_use_background_image":true,
  "has_extended_profile":false,
  "default_profile":false,
  "default_profile_image":false,
  "following":false,
  "follow_request_sent":false,
  "notifications":false,
  "suspended":false,
  "needs_phone_verification":false
  },
  "profileImageURL":"https://pbs.twimg.com/profile_images/477427636453781505/tZOu_EIT_normal.jpeg"
  }
*/