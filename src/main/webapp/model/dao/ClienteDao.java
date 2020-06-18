package model.dao;

import model.entities.Cliente;

public interface ClienteDao {

	void inserirCliente(Cliente cliente);

	void inserirEndereco(Cliente cliente);

	void inserirContato(Cliente cliente);
}
