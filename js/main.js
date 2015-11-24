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
	// Fire tooltip widget!
	//$('[data-toggle="tooltip"]').tooltip();

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
		$.getJSON('js/sample2.json', function(data){
			$('#listed ul').html('');
			$.each(data, function(i, field){
				// Da Tweet
				$("#listed ul").append('<li id="'+data[i].id+'"><div class="col-md-2"><img src="'+data[i].img+'" alt="avatar" class="img-rounded img-responsive"></div><div class="col-md-9"><h2>'+data[i].title+'</h2><p>'+moment(data[i].date).toNow()+' by <a href="//www.twitter.com/'+data[i].username+'">'+data[i].username+'</a></p><p id="options'+data[i].id+'"></p></div></li>');
				// Reply :)
				$('#options'+data[i].id).append('<a href="#'+data[i].id+'" data-toggle="tooltip" data-placement="bottom" title="Reply to this guy!"><i class="fa fa-reply"></i></a> ');
				// Like
				$('#options'+data[i].id).append('<a href="#'+data[i].id+'" data-toggle="tooltip" data-placement="bottom" title="Loves... Likes... Favorites... All verbs means the same"><i class="fa fa-heart"></i></a> ');
				// Delete
				$('#options'+data[i].id).append('<a href="#" data-toggle="tooltip" data-placement="bottom" title="oh boy! delete! delete! delete!"><i class="fa fa-trash"></i></a> ');
				// More
				$('#options'+data[i].id).append('<a href="#'+data[i].id+'" data-toggle="tooltip" data-placement="bottom" title="More option will be great!"><i class="fa fa-ellipsis-h"></i></a> ');
			});
		});
	};
});