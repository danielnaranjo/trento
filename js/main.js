// Came from Stackoverflow but modified to used ;)
var allowCharacters = 140;

function countChar(val) {
	var len = val.value.length;
	if (len >= allowCharacters) {
		val.value = val.value.substring(0, allowCharacters);
	} else {
		$('#charNum').html(allowCharacters - len);
	}
	if($('textarea').val().length>=allowCharacters) {
		$('#sendIt').addClass('disabled');
		console.log('Stop!');
	}
}

$(function(){
	// for test propose
	console.log('Got it!');

	//hide until log in
	$('aside').css('display','none');

	$('button').on('click', function(){
		$('aside').css('display','inline').addClass('animated fadeInLeft');
		$('#loginPanel').addClass('animated fadeOutDown');

		$('#start').css('display','none');
		$('#listed').css('display','inline').addClass('animated fadeInUp');

		// Funny thing is allowed ;)
		$('#hireMe').attr('href','mailto:daniel@loultimoenlaweb.com?subject=Trento is OK&body=Nice one!');

		// for test propose
		loadAgain();

	});

	$('textarea').on('keyup', function(){
		// Show characters remain and remove disabled from button
		$('small').css('visibility','visible').addClass('animated shake');
		$('#sendIt').removeAttr('disabled').removeClass('disabled');

		// Check if textarea is in range, then..  
		if($('textarea').val().length==allowCharacters){
			$('#stopped').html('<p>Oh no! There is not space!</p>').css('display','');
			$('#stopped').addClass('animated bounceInUp');
		}
	});

	// for test propose
	function loadAgain() {
		$.getJSON('http://localhost:8890/trento/api/me', function(data){ //js/sample2.json
			$('#listed ul').html('');
			$('footer').addClass('animated bounceOutDown');

			$(window).scroll(function() {
				if($(this).scrollTop()>0) {
					$('aside').addClass('animated fadeOutLeft');
				// } else {
					// $('aside').addClass('animated fadeInLeft');
				}
				if($(this).scrollTop()<10) {
					$('aside').removeClass('fadeOutLeft').addClass('bounceInLeft');
				}
			});


			$.each(data, function(i, field){
				$('#name').html(data[i].user.name);
				$('#nickname').html(data[i].user.screen_name);
				$('#description').html(data[i].user.description);
				$('#url').html('Check it out at <a href="'+data[i].user.url+'">'+data[i].user.url+'</a>');
				$('#join').html('Playing here since '+moment(data[i].user.created_at).toNow());

				// Da Tweet
				$("#listed ul").append('<li id="'+data[i].id+'"><div class="col-md-2"><img src="'+data[i].user.profile_image_url+'" alt="avatar" class="img-rounded img-responsive"></div><div class="col-md-9"><h2>'+data[i].text+'</h2><p>'+moment(data[i].created_at).toNow()+' by <a target="_blank" href="//twitter.com/'+data[i].user.screen_name+'" data-toggle="modal" data-target="#myModal">'+data[i].user.screen_name+'</a></p><p id="options'+data[i].id+'"></p></div></li>').addClass('animated bounceInUp');
				
				// Reply :)
				$('#options'+data[i].id).append('<a href="/replyTo/'+data[i].id+'" data-toggle="tooltip" data-placement="bottom" title="Reply to this guy!"><i class="fa fa-reply"></i></a> '+ data[i].retweet_count+' ');
				// Like
				$('#options'+data[i].id).append('<a href="/api/loveIt/'+data[i].id+'" title="Loves... Likes... Favorites... All verbs means the same"><i class="fa fa-heart"></i></a> '+ data[i].favorite_count+'');
				// Delete
				$('#options'+data[i].id).append('<a href="/api/delete/'+data[i].id+'" title="oh boy! delete! delete! delete!"><i class="fa fa-trash"></i></a> ');
				// More
				$('#options'+data[i].id).append('<a href="/api/more/'+data[i].id+'" title="More option will be great!"><i class="fa fa-ellipsis-h"></i></a> ');

				$('#options'+data[i].id).attr('data-toggle="tooltip" data-placement="bottom"');
			});

		});
	}
	// Fire tooltip widget!
	$('[data-toggle="tooltip"]').tooltip();
});