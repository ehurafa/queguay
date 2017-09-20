jQuery(document).ready(function(){
	
});

jQuery(window).load(function(){
	

	altura();
	

});

jQuery(window).scroll(function(){

});

jQuery(window).resize(function(){
	altura();
});

  // carregando
  function carregando(){
  	
  	
  }

  // carregado
  function carregado(){
    $('.loader').fadeOut(200);
    $('#empadas, #endereco').removeClass('opacity');
    $('body, header').removeClass('fixed');
  }



function altura(){
	var altura = $('.camada-1').height();
	$('.camada-2, .camada-3, .camada-4').height(altura);
}
