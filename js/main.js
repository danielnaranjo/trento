// Came from Stackoverflow but modified to used ;)
var allowCharacters = 140;

function countChar(val) {
	var len = val.value.length;
	if (len >= allowCharacters) {
		val.value = val.value.substring(0, allowCharacters);
	} else {
		$('#charNum').html(allowCharacters - len);
	}
	if(len==140) {
		console.log('Stop!');
	}
}

$(function(){
	// for test propuse
	console.log('Got it!');

	//hide until log in
	$('aside').css('display','none');

	$('button').on('click', function(){
		$('aside').css('display','inline').addClass('animated fadeInLeft');
		$('#loginPanel').addClass('animated fadeOutDown');//.delay(200).css('display','none')
	});

	$('textarea').on('keyup', function(){
		if($('textarea').val().length==allowCharacters){
			$('#stopped').addClass('animated bounceInUp').removeClass('display');
		}
	});

});