package model.entities;

import java.util.ArrayList;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@ManagedBean
@RequestScoped
public class Camisa {

	private String tamanhoCamisa;
	private String timeEscolhido;
	private int quantidade;

	private ArrayList<String> carrinho;

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

		String quantiString = Integer.toString(getQuantidade());

		/*
		 * carrinho.add(getTimeEscolhido() + getTamanhoCamisa() + quantiString);
		 * 
		 * System.out.println(carrinho);
		 */

	}

}
