package model.entities;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@ManagedBean
@RequestScoped
public class TamanhoCamisa {

	private String tamanhoCamisa;

	public String getTamanhoCamisa() {
		return tamanhoCamisa;

	}

	public void setTamanhoCamisa(String tamanhoCamisa) {
		this.tamanhoCamisa = tamanhoCamisa;
		System.out.println(tamanhoCamisa);
	}

}
