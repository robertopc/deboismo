var menuopen = false;
var lastFrase;
var lastId;

// botão share facebook
$('.btnShare').click(function(){
	elem = $(this);
	postToFeed(elem.data('title'), elem.data('desc'), elem.prop('href'), elem.data('image'));

	return false;
});

$('#menu-button').click( function() {

	if( ! menuopen ) {

    	$('footer').animate({ bottom: '0' });

		$('#menu-button').css('transform','rotateZ(180deg)');

		menuopen = true;

	} else {

    	$('footer').animate({ bottom: '-' + ( $(window).height() - 64 ) + 'px' });

		$('#menu-button').css('transform','rotateZ(0deg)');

		menuopen = false;
	}
});

// Mandamentos Hover
$('.mandamentos').hover(function(){

	lastId    = $(this).attr('id');
	lastFrase = $(this).html();

	// qual é o mandamento
	switch( lastId ) {
		case'mandamento_1':
			$(this).html("1. Não faça aos outros<br> o que não quer que<br>façam com você.");
			break;
		case'mandamento_2':
			$(this).html('2. Em todas as coisas,<br>faça de tudo para<br>não provocar o mal.');
			break;
		case'mandamento_3':
			$(this).html('3. Trate os outros,<br>os animais e o mundo<br>com amor, honestidade,<br>fidelidade e respeito.');
			break;
		case'mandamento_4':
			$(this).html('4. Não ignore o mal nem<br>evite administrar a justiça.');
			break;
		case'mandamento_5':
			$(this).html('5. Viva a vida com um<br>sentimento de alegria e<br> deslumbramento.');
			break;
		case'mandamento_6':
			$(this).html('6. Sempre tente<br>aprender algo de novo.');
			break;
		case'mandamento_7':
			$(this).html('7. Compare suas crenças com fatos,<br>e descarte as que não atendam<br>os princípios.');
			break;
		case'mandamento_8':
			$(this).html('8. Jamais se autocensure ou fuja da dissidência;<br>sempre respeite o direito dos outros de discordar de você.');
			break;
		case'mandamento_9':
			$(this).html('9. Crie opiniões independentes;<br>não se permita ser dirigido pelos outros.');
			break;
		case'mandamento_10':
			$(this).html('10. Seja cético.');
			break;
	}
},
function(){

	$('#'+ lastId).html( lastFrase );
});
