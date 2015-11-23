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
	$('#listed ul').html('');
	$.getJSON('js/sample.json', function(data){
		$('#listed ul').append('<li>Cargada!</li>');
		console.log('data', data);
		$('#listed ul').append('<li>Hola</li>');
	});
});