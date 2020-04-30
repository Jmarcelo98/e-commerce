package model.entities;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@ManagedBean
@RequestScoped
public class Camisa {

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

	public void adicionarAoCarrinho() {

		if (getQuantidade() == 0 || getTamanhoCamisa() == null || getTamanhoCamisa() == " "
				|| getTimeEscolhido() == null || getTimeEscolhido() == " ") {

			// primeiro retorno é vazio, e não irá fazer nada

		} else {

			String quantiString = Integer.toString(getQuantidade());

			System.out.println("time " + getTimeEscolhido());
			System.out.println("taman " + getTamanhoCamisa());
			System.out.println("quant " + quantiString);

			System.out.println();

		}

	}

}
