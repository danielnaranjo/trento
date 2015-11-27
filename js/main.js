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
		getMore();

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

	$(window).scroll(function() {
		if($(this).scrollTop()>0) {
			$('aside').css('height','2000px').addClass('animated fadeOutLeft');
		// } else {
			// $('aside').addClass('animated fadeInLeft');
		}
		if($(this).scrollTop()<10) {
			$('aside').removeClass('fadeOutLeft').addClass('bounceInLeft');
		}
	});


	// for test propose
	function getMore() {
		$.getJSON('http://localhost:8890/trento/api/me', function(data){ //js/sample2.json
			$('#listed ul').html('');
			$('#more').css('display','inline').addClass('animated fadeIn');
			$('footer').addClass('animated bounceOutDown');

			$.each(data, function(i, field){
				$('#name').html('<a href="//www.twitter.com/'+data[i].user.screen_name+'">'+data[i].user.name+'</a>');
				$('#description').html(data[i].user.description);
				$('#url').html('Check it out at <a href="'+data[i].user.url+'">'+data[i].user.url+'</a>');
				$('#join').html('Playing here since '+moment(data[i].user.created_at).toNow());

				// Da Tweet
				$("#listed ul").append('<li id="'+data[i].id+'" class="box"><div class="col-md-2"><img src="'+data[i].user.profile_image_url+'" alt="avatar" class="img-rounded img-responsive"></div><div class="col-md-9"><h2>'+data[i].text+'</h2><p><span id="options'+data[i].id+'"></span> '+moment(data[i].created_at).toNow()+' by <a target="_blank" href="//twitter.com/'+data[i].user.screen_name+'">'+data[i].user.screen_name+'</a></p></div></li>').addClass('animated bounceInUp');
				
				// Reply :)
				$('#options'+data[i].id).append('<a href="/replyTo/'+data[i].id+'" title="Reply to this guy!"><i class="fa fa-reply"></i></a>');//'+ data[i].retweet_count+'
				// Like
				$('#options'+data[i].id).append('<a href="/api/loveIt/'+data[i].id+'" title="Loves... Likes... Favorites... All verbs means the same"><i class="fa fa-heart"></i></a>');//'+ data[i].favorite_count+'
				// Delete
				$('#options'+data[i].id).append('<a href="/api/delete/'+data[i].id+'" title="oh boy! delete! delete! delete!"><i class="fa fa-trash"></i></a>');
				// More
				$('#options'+data[i].id).append('<a href="javascript:;" data-toggle="modal" data-target="#myModal" title="More option will be great!"><i class="fa fa-ellipsis-h"></i></a>');

				$('#options'+data[i].id+' a').attr('data-toggle="tooltip" data-placement="bottom"');
			});
		})
		.error(function() {
			$('#listed h3').html("Can't connect to server. Please check your Internet connection.");
			setTimeout(function(){
				getMore();
				$('#listed h4').html('Retrying fetch data every 10 seconds..');
			},10000);
		});
	}

	// refresh()
	$('#getMore').on('click', function(){
		$('#listed ul').html('');
		getMore();
		console.log('getMore clicked');
	});
	// Fire tooltip widget!
	$('[data-toggle="tooltip"]').tooltip();
});