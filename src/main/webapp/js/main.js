/*function Mudarestado(el) {
	var display = document.getElementById(el).style.display;
	if (display == "none")
		document.getElementById(el).style.display = 'block';
	else
		document.getElementById(el).style.display = 'none';
}
 */
/*function Mudarestado(el) { var display =
 document.getElementById(el).style.display; if(display == "none")
 document.getElementById(el).style.display = 'block'; else
 document.getElementById(el).style.display = 'none'; }*/

/*$(function() {
 $("#athleticoPr").click(function(e) {
 e.preventDefault();
 el = $(this).data('element');
 $(el).toggle();
 });
 });*/

$(function() {
	abaProdutos();
})

function abaProdutos() {

	// ABA DE CAMISAS//
	$("#athleticoPr")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.atlePr').fadeIn();
						}, 400);

					});

	$("#atleticoMg")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.atleMg').fadeIn();
						}, 400);
					});

	$("#avai")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .bahia, .botafogo,.ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.avai').fadeIn();
						}, 400);
					});

	$("#bahia")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .botafogo,.ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.bahia').fadeIn();
						}, 400);
					});

	$("#botafogo")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.botafogo').fadeIn();
						}, 400);
					});

	$("#ceara")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.ceara').fadeIn();
						}, 400);
					});

	$("#chapecoense")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara , .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.chapecoense').fadeIn();
						}, 400);
					});

	$("#corinthians")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.corinthians').fadeIn();
						}, 400);
					});

	$("#cruzeiro")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.cuzeiro').fadeIn();
						}, 400);
					});

	$("#csa")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.csa').fadeIn();
						}, 400);
					});

	$("#flamengo")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.flamengo').fadeIn();
						}, 400);
					});

	$("#fluminense")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.fluminense').fadeIn();
						}, 400);
					});

	$("#fortaleza")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.fortaleza').fadeIn();
						}, 400);
					});

	$("#goias")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.goias').fadeIn();
						}, 400);
					});

	$("#gremio")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.gremio').fadeIn();
						}, 400);
					});

	$("#internacional")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .goias, , .gremio, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.internacional').fadeIn();
						}, 400);
					});

	$("#palmeiras")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .goias, .gremio, .internacional, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.palmeiras').fadeIn();
						}, 400);
					});

	
	
	$("#santos")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .goias, .gremio, .internacional, .palmeiras, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.santos').fadeIn();
						}, 400);
					});
	
	
	$("#saoPaulo")
	.click(
			function(event) {
				event.preventDefault();
				$(
						'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .goias, .gremio, .internacional, .palmeiras, .santos , .vasco')
						.fadeOut();
				setTimeout(function() {
					$('.saoPaulo').fadeIn();
				}, 400);
			});
	
	$("#vasco")
	.click(
			function(event) {
				event.preventDefault();
				$(
						'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .goias, .gremio, .internacional, .palmeiras, .santos, .saoPaulo')
						.fadeOut();
				setTimeout(function() {
					$('.vasco').fadeIn();
				}, 400);
			});

}