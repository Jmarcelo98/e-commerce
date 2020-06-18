package model.dao.implementacao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.bancoDados.ConexaoBD;
import model.dao.ClienteDao;
import model.entities.Cliente;

public class ClienteDaoJDBC implements ClienteDao {

	Connection conexao = null;
	PreparedStatement st = null;
	ResultSet rs = null;

	@Override
	public void inserirEndereco(Cliente cliente) {

		try {

			conexao = ConexaoBD.abriConexao();

			st = conexao.prepareStatement("INSERT INTO ENDERECO (ENDERECO, NUMERO, COMPLEMENTO) values (?,?,?)");

			st.setString(1, cliente.getEndereco());
			st.setString(2, cliente.getNumero());
			st.setString(3, cliente.getComplemento());

			st.executeUpdate();

		} catch (SQLException e) {
			e.getMessage();
		} finally {
			ConexaoBD.fecharStatement(st);
			ConexaoBD.fecharConexaoComoBanco();
		}

	}

	@Override
	public void inserirContato(Cliente cliente) {

		try {

			conexao = ConexaoBD.abriConexao();

			st = conexao.prepareStatement("INSERT INTO CONTATO (EMAIL, TELEFONE) values (?,?)");

			st.setString(1, cliente.getEmail());
			st.setString(2, cliente.getTelefone());

			st.executeUpdate();

		} catch (SQLException e) {
			e.getMessage();
		} finally {
			ConexaoBD.fecharStatement(st);
			ConexaoBD.fecharConexaoComoBanco();
		}

	}

	@Override
	public void inserirCliente(Cliente cliente) {
		try {

			conexao = ConexaoBD.abriConexao();

			int idContato = pegarUltimoIdContato();
			int idEnderece = pegarUltimoIdEndereco();

			st = conexao.prepareStatement(
					"INSERT INTO CLIENTE (NOME_COMPLETO, CPF, ID_CONTATO, ID_ENDERECO) values (?,?,?,?)");

			st.setString(1, cliente.getNomeCompleto());
			st.setString(2, cliente.getCpfCliente());
			st.setInt(3, idContato);
			st.setInt(4, idEnderece);

		} catch (SQLException e) {
			e.getMessage();
		} finally {
			ConexaoBD.fecharStatement(st);
			ConexaoBD.fecharConexaoComoBanco();
		}

	}

	public int pegarUltimoIdEndereco() {

		int idEndereco = 0;

		try {

			conexao = ConexaoBD.abriConexao();

			st = conexao.prepareStatement("SELECT MAX(ID_ENDERECO) FROM endereco");

			rs = st.executeQuery();

			while (rs.next()) {
				idEndereco = rs.getInt("ID_ENDERECO");

			}

		} catch (SQLException e) {
			e.getMessage();
		}

		return idEndereco;
	}

	public int pegarUltimoIdContato() {

		int idContato = 0;

		try {

			conexao = ConexaoBD.abriConexao();

			st = conexao.prepareStatement("SELECT MAX(ID_CONTATO) FROM contato");

			rs = st.executeQuery();

			while (rs.next()) {
				idContato = rs.getInt("ID_CONTATO");

			}

		} catch (SQLException e) {
			e.getMessage();
		}

		return idContato;
	}

}
