$(function() {
	abaProdutos();
})

$(document).ready(function() {
	$('#quantidade').val($(this).val().replace(/^0+/, ''));
});

$(document).ready(function() {
	$('#teste2').val('Athletico Paranaense');
});

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
						$('#teste2').val('Athletico Paranaense');
					}

			);

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
						$('#teste2').val('Atletico Mineiro');
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
						$('#teste2').val('Avai');
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
						$('#teste2').val('Bahia');
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
						$('#teste2').val('Botafogo');
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
						$('#teste2').val('Ceara');
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
						$('#teste2').val('Chapecoense');
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
						$('#teste2').val('Corinthians');
					});

	$("#cruzeiro")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .csa, .flamengo, .fluminense, .fortaleza, .gremio, .goias, .internacional, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.cruzeiro').fadeIn();
						}, 400);
						$('#teste2').val('Cruzeiro');
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
						$('#teste2').val('CSA');
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
						$('#teste2').val('Flamengo');
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
						$('#teste2').val('Fluminense');
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
						$('#teste2').val('Fortaleza');
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
						$('#teste2').val('Goias');
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
						$('#teste2').val('Gremio');
					});

	$("#internacional")
			.click(
					function(event) {
						event.preventDefault();
						$(
								'.atlePr, .atleMg, .avai, .bahia, .botafogo, .ceara, .chapecoense, .corinthians, .cruzeiro, .csa, .flamengo, .fluminense, .fortaleza, .goias, .gremio, .palmeiras, .santos, .saoPaulo, .vasco')
								.fadeOut();
						setTimeout(function() {
							$('.internacional').fadeIn();
						}, 400);
						$('#teste2').val('Internacional');
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
						$('#teste2').val('Palmeiras');
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
						$('#teste2').val('Santos');
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
						$('#teste2').val('Sao Paulo');
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
						$('#teste2').val('Vasco');
					});

}