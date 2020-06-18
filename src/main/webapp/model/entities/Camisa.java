package model.entities;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

import model.dao.implementacao.CamisaDaoJDBC;

@ManagedBean
@RequestScoped
public class Camisa {

	private double precoCamisas = 99.99;

	private String tamanhoCamisa;
	private String timeEscolhido;
	private int quantidade;

	public String getTamanhoCamisa() {
		return tamanhoCamisa;
	}

	public void setTamanhoCamisa(String tamanhoCamisa) {
		this.tamanhoCamisa = tamanhoCamisa;
		System.out.println("tamanho: " + tamanhoCamisa);
	}

	public String getTimeEscolhido() {
		return timeEscolhido;
	}

	public void setTimeEscolhido(String timeEscolhido) {
		this.timeEscolhido = timeEscolhido;
		System.out.println("time: " + timeEscolhido);
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
		System.out.println("quantidade: " + quantidade);
	}

	public String valorDasCamisas() {

		DecimalFormat f = new DecimalFormat("#,##0.00", new DecimalFormatSymbols(new Locale("pt", "BR")));

		Double valor = getQuantidade() * precoCamisas;

		String formatado = f.format(valor);

		return formatado;

	}

	public int idDasCamisa() {

		int idFinal = 0;

		if (timeEscolhido == "Athletico Paranaense") {
			idFinal = 1;
		} else if (timeEscolhido == "Atletico Mineiro") {
			idFinal = 2;
		} else if (timeEscolhido == "Avai") {
			idFinal = 3;
		} else if (timeEscolhido == "Bahia") {
			idFinal = 4;
		} else if (timeEscolhido == "Botafogo") {
			idFinal = 5;
		} else if (timeEscolhido == "Ceara") {
			idFinal = 6;
		} else if (timeEscolhido == "Chapecoense") {
			idFinal = 7;
		} else if (timeEscolhido == "Corinthians") {
			idFinal = 8;
		} else if (timeEscolhido == "Cruzeiro") {
			idFinal = 9;
		} else if (timeEscolhido == "CSA") {
			idFinal = 10;
		} else if (timeEscolhido == "Flamengo") {
			idFinal = 11;
		} else if (timeEscolhido == "Fluminense") {
			idFinal = 12;
		} else if (timeEscolhido == "Fortaleza") {
			idFinal = 13;
		} else if (timeEscolhido == "Goias") {
			idFinal = 14;
		} else if (timeEscolhido == "Gremio") {
			idFinal = 15;
		} else if (timeEscolhido == "Internacional") {
			idFinal = 16;
		} else if (timeEscolhido == "Palmeiras") {
			idFinal = 17;
		} else if (timeEscolhido == "Santos") {
			idFinal = 18;
		} else if (timeEscolhido == "Sao Paulo") {
			idFinal = 19;
		} else if (timeEscolhido == "Vasco") {
			idFinal = 20;
		}

		return idFinal;

	}

	public int idTamanho() {

		int idFinal = 0;
		if (tamanhoCamisa == "GG") {
			idFinal = 1;
		} else if (tamanhoCamisa == "G") {
			idFinal = 2;
		} else if (tamanhoCamisa == "M") {
			idFinal = 3;
		} else if (tamanhoCamisa == "P") {
			idFinal = 4;
		}
		return idFinal;
	}

}
