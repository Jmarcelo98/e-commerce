function abaProdutos() {

	// ABA DE CAMISAS//
	$("#athleticoPr").click(function(event) {
		event.preventDefault();
		$('.basculantes, .acessorios, .portas, .cancelas').fadeOut();
		setTimeout(function() {
			$('.deslizantes').fadeIn();
		}, 300);
		$('.product-card').removeClass("wow bounceInUp");
		$('.product-card').removeAttr("data-wow-duration");
		$('.product-card').removeAttr("style");
	});
	/*$("#basc-link").click(function(event) {
		event.preventDefault();
		$('.deslizantes, .acessorios, .portas, .cancelas').fadeOut();
		setTimeout(function() {
			$('.basculantes').fadeIn();
		}, 300);
	});
	$("#canc-link").click(function(event) {
		event.preventDefault();
		$('.deslizantes, .basculantes, .portas, .acessorios').fadeOut();
		setTimeout(function() {
			$('.cancelas').fadeIn();
		}, 300);
	});
	$("#port-link").click(function(event) {
		event.preventDefault();
		$('.deslizantes, .acessorios, .cancelas, .basculantes').fadeOut();
		setTimeout(function() {
			$('.portas').fadeIn();
		}, 300);
	});
	$("#aces-link").click(function(event) {
		event.preventDefault();
		$('.deslizantes, .basculantes, .cancelas, .portas').fadeOut();
		setTimeout(function() {
			$('.acessorios').fadeIn();
		}, 300);
	});*/

}