package model.entities;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

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

}
